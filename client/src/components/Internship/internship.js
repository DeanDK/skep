import React, { Component } from "react";
import { connect } from "react-redux";

import { getAllInternships } from "./../../actions";
import InternshipItem from "./../../widgets/internship_item.js";
import LoadMore from "./../../widgets/load_more.js";

class Internship extends Component {
  state = {
    limit: 5
  };

  componentWillMount = () => {
    this.props.dispatch(getAllInternships(0, this.state.limit, "asc"));
  };

  _loadmore = () => {
    const count = this.props.files.file.length;
    this.props.dispatch(
      getAllInternships(
        count,
        this.state.limit,
        "asc",
        this.props.internships.internship
      )
    );
  };

  _renderItems = internships =>
    internships
      ? internships.map((item, i) => {
          return <InternshipItem {...item} key={i} index={i} id="internship" />;
        })
      : null;

  render() {
    console.log(this.props);
    return (
      <div>
        {this._renderItems(
          this.props.internships.internship || this.props.internship
        )}
        <LoadMore onClick={this._loadmore} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { internships: state.internship };
}

export default connect(mapStateToProps)(Internship);
