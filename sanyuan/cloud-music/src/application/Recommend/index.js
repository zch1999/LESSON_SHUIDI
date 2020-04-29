import React, { useEffect } from 'react';
import {} from './style.js';
import { connect } from "react-redux";
import * as actionTypes from './store/actionCreators';

function Recommend(props){
  // const { route } = props;
  const { getBannerDataDispatch, getRecommendListDataDispatch } = props;
  console.log(props.bannerList)
  useEffect(() => {
    if(!bannerList.size){
      getBannerDataDispatch();
    }
    // if(!recommendList.size){
    //   getRecommendListDataDispatch();
    // }
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      
    </div>
  );
}

// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => ({
  // 不要再这里将数据toJS,不然每次diff比对props的时候都是不一样的引用，还是导致不必要的重渲染, 属于滥用immutable
  bannerList: state.getIn(['recommend', 'bannerList']),
  // recommendList: state.getIn(['recommend', 'recommendList']),
  // enterLoading: state.getIn(['recommend', 'enterLoading'])//简单数据类型不需要调用toJS
});

// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList());
    },
    getRecommendListDataDispatch() {
      dispatch(actionTypes.getRecommendList());
    },
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend));