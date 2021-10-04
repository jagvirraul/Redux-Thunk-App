import React, { useEffect, useState } from 'react';
import { getUserList } from '../redux/action/action';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import Additem from './Additem';
import './style.scss';
const initialState = {
    totalPage: 0,
    activePage:0,
    items : []
}

const Main = ({ callUserListAPT, userList }) => {
    const [state,setState] = useState(initialState);
    console.log("userList",userList)
    useEffect(() => {
        callUserListAPT()
    }, [])

    useEffect(() => {
        const totalPage = getTotalPage();
        const item = getPageItems(0);
        setState({totalPage,items:item, activePage:0})
    }, [userList])

    const onPageChange = ({selected}) => {
        console.log("selected",selected)
        const item = getPageItems(selected);
        setState({items:item, activePage:selected})

    }

    const getPageItems = (page)=>{
        const item = userList.slice((page)*10, (page+1)*10);
        return item

    }

    const getTotalPage = ()=>{
        const totalUser = userList && userList.length || 0;
        const page = totalUser /10;
        const extra = totalUser % 10 ? 1 : 0;
        const totalPage = page + extra;
        return totalPage
    }

    return (
        <div className="main">
        <div className="main-container">
            <div className="heading">
                <h1>Title</h1>
            </div>
            <Additem/>
            <div className="list" >
                    {state.items.map((elem) => {
                        return (
                            <div>
                                <span className="list-id">{elem.id}</span>
                                <span>{elem.title}</span>    
                            </div>
                        );
                    }
                    )}
            </div>
            <div className="pagination-container">
                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    breakLabel={'.......'}
                    breakClassName={'break-me'}
                    pageCount={state.totalPage}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={1}
                    onPageChange={onPageChange}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            </div>
        </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return ({ 
        userList: state.itemList.userList || [] ,
    })
}

const mapDispatchToProps = (dispatch) => ({
    callUserListAPT: (...params) => dispatch(getUserList(...params))
})


export default connect(mapStateToProps, mapDispatchToProps)(Main);
