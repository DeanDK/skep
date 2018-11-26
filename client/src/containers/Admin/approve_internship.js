import React, { Component } from "react";
import { connect } from "react-redux";

import { getAllInternships } from "./../../actions";
import InternshipItem from "./../../widgets/internship_item";
import LoadMore from "./../../widgets/load_more.js";

class ApproveInternship extends Component {
  state = {
    limit: 4,
    message: ""
  };

  componentWillMount = () => {
    if (this.props.user.auth.role !== 1) this.props.history.push("/home");
  };

  _loadmore = () => {
    const count = this.props.internships.internship.length;
    this.props.dispatch(
      getAllInternships(
        count + 1,
        this.state.limit,
        "asc",
        this.props.internships.internship
      )
    );
  };

  _renderItems = internships =>
    internships
      ? internships.map((item, i) => {
          return <InternshipItem {...item} key={i} index={i} id="approve" />;
        })
      : null;

  render() {
    console.log(this.props);
    return (
      <div>
        {this._renderItems(this.props.internships.internship)}
        <LoadMore onClick={this._loadmore} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { internships: state.internship };
}

export default connect(mapStateToProps)(ApproveInternship);
