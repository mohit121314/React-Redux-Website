import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getViewchild } from "../actions/viewchild";

const Wrapper = styled.div``;

class Viewchild extends Component {
  state = {
    child_profile: [
      {
        id: 51,
        name: "Laxmi",
        sex: "2",
        dob: "2014-04-02",
        father_name: "Kishansingh",
        mother_name: "Uddi",
        district_id: 1,
        photo:
          "https://staging-dhwani.s3.ap-south-1.amazonaws.com/82ac44b1c5d7ef91a9e912abca5fc3f5.jpg"
      },
      {
        id: 52,
        name: "Laxmi",
        sex: "2",
        dob: "2012-11-07",
        father_name: "Vinod nath",
        mother_name: "Babli bai",
        district_id: 1,
        photo:
          "https://staging-dhwani.s3.ap-south-1.amazonaws.com/82ac44b1c5d7ef91a9e912abca5fc3f5.jpg"
      },
      {
        id: 53,
        name: "श्रेया सिंह ",
        sex: "2",
        dob: "2015-03-15",
        father_name: "सर्वेश पटेल ",
        mother_name: "सुमन ",
        district_id: 1,
        photo:
          "https://staging-dhwani.s3.ap-south-1.amazonaws.com/82ac44b1c5d7ef91a9e912abca5fc3f5.jpg"
      },
      {
        id: 54,
        name: "Ansara biii",
        sex: "2",
        dob: "2015-11-05",
        father_name: "Mohd imaran",
        mother_name: "Sameem",
        district_id: 1,
        photo:
          "https://staging-dhwani.s3.ap-south-1.amazonaws.com/82ac44b1c5d7ef91a9e912abca5fc3f5.jpg"
      },
      {
        id: 67,
        name: "lNLnln",
        sex: "ln",
        dob: "0000-00-00",
        father_name: "ln",
        mother_name: "lnl",
        district_id: 1,
        photo: ""
      },
      {
        id: 68,
        name: "nKn",
        sex: "kn",
        dob: "0000-00-00",
        father_name: "k",
        mother_name: "nk",
        district_id: 1,
        photo: ""
      },
      {
        id: 69,
        name: "knk",
        sex: "nk",
        dob: "0000-00-00",
        father_name: "kn",
        mother_name: "kn",
        district_id: 1,
        photo:
          "https://staging-dhwani.s3.ap-south-1.amazonaws.com/82ac44b1c5d7ef91a9e912abca5fc3f5.jpg"
      },
      {
        id: 71,
        name: "ksdndskn",
        sex: "kn",
        dob: "0000-00-00",
        father_name: "k",
        mother_name: "n",
        district_id: 1,
        photo:
          "https://staging-dhwani.s3.ap-south-1.amazonaws.com/82ac44b1c5d7ef91a9e912abca5fc3f5.jpg"
      },
      {
        id: 92,
        name: "f",
        sex: "",
        dob: "0000-00-00",
        father_name: "ff",
        mother_name: "gg",
        district_id: 1,
        photo: ""
      },
      {
        id: 95,
        name: "Rirtik",
        sex: "",
        dob: "1998-02-13",
        father_name: "som",
        mother_name: "nath",
        district_id: 1,
        photo: ""
      },
      {
        id: 96,
        name: "Rirtik",
        sex: "",
        dob: "1998-02-13",
        father_name: "som",
        mother_name: "nath",
        district_id: 1,
        photo: ""
      },
      {
        id: 97,
        name: "Rirtik",
        sex: "",
        dob: "1998-02-13",
        father_name: "som",
        mother_name: "nath",
        district_id: 1,
        photo: ""
      },
      {
        id: 98,
        name: "G",
        sex: "",
        dob: "1998-12-12",
        father_name: "E",
        mother_name: "H",
        district_id: 1,
        photo: ""
      },
      {
        id: 99,
        name: "go",
        sex: "",
        dob: "1996-10-13",
        father_name: "fo",
        mother_name: "ho",
        district_id: 1,
        photo: ""
      },
      {
        id: 100,
        name: "A",
        sex: "Male",
        dob: "1997-12-12",
        father_name: "b",
        mother_name: "c",
        district_id: 1,
        photo: ""
      }
    ]
  };

  componentDidMount() {
    const { getViewchild } = this.props;

    getViewchild();
  }
  render() {
    const { featured_viewchild } = this.props;
console.log(this.props);
    return (
      <Wrapper>
        {this.state.child_profile.map((item, index) => {
          return this.props.match.params.id == item.id ? (
            <div>
              <h3>{item.name}</h3>
              <h3>{item.sex}</h3>
              <h3>{item.dob}</h3>
              <h3>{item.father_name}</h3>
              <h3>{item.mother_name}</h3>
              <h3>{item.district_id}</h3>
            </div>
          ) : null;
        })}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    featured_viewchild: state.viewchild.featured_viewchild
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getViewchild }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Viewchild);
