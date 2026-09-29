import React from 'react'
export default class LifeCycleDemo extends React.Component
{
    //mounting
    constructor(props)
    {
        super(props);
        this.state={count: 0};
        console.log("1.Constructor");
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log("2.getDerivedStateFromProps");
        return null;
    }
    render()
    {
        console.log("3.render");
        return(<h1>Count : {this.state.count}</h1>);
    }
    componentDidMount()
    {
        console.log("4.componentDidMount");
        setTimeout(()=>{
            this.setState({count :1});
        }, 2000);
    }

    //update
    shouldComponentUpdate()
    {
        console.log("5.shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevprops,prevstate)
    {
        console.log("6.getSnapshotBeforeUpdate");
        return null;
    }
    componentDidUpdate()
    {
        console.log("7.componentDidUpdate");
        return null;
    }
    componentWillUnmount()
    {
        console.log("8.componentWillUnmount");
    }

}