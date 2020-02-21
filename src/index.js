import React, { useState, Component } from 'react'
import './index.scss'

class Calendar extends Component {
    state = {
        value: this.props.value
    }
    async componentWillMount() {
        await this.setState({
            time: this.state.value.getTime(),
            year: this.state.value.getFullYear(),
            month: this.state.value.getMonth() + 1,
            day: this.state.value.getDate(),
            weekDay: this.state.value.getDay()
        })
    }
    getMonthDayNum() {
        let curDate = new Date(this.state.year, this.state.month, 0)
        return curDate.getDate()
    }
    getMonthFirstDay() {
        let curDate = this.state.value
        curDate.setFullYear(this.state.year)
        curDate.setMonth(this.state.month - 1)
        curDate.setDate(1)
        let week = curDate.getDay()
        if (week === 0) {
            week = 7
        }
        return week
    }
    dateTemplate() {
        let curMonthDayNum = this.getMonthDayNum(
            this.state.year,
            this.state.month
        )
        let preMonthDayNum = this.getMonthDayNum(
            this.state.year,
            this.state.month - 1
        )
        let curMonthFirstDay = this.getMonthFirstDay(1)
        let arr = new Array(42).fill('')
        let n = 1
        let m = preMonthDayNum
        arr.forEach((item, index) => {
            if (index >= curMonthFirstDay - 1) {
                arr[index] = index - curMonthFirstDay + 2
            }
            if (curMonthFirstDay + curMonthDayNum <= index + 1) {
                arr[index] = n++
            }
            if (index < curMonthFirstDay - 1) {
                arr[curMonthFirstDay - 2 - index] = m--
            }
        })

        let arrList = arr.map((item, index) => {
            return <div key={Math.random()}>{item}</div>
        })
        return <>{arrList}</>
    }
    changeMonth = flag => {
        return async () => {
            if (flag === 'next') {
                if (this.state.month >= 12) {
                    this.setState({
                        month: 1,
                        year: this.state.year + 1
                    })
                } else {
                    this.setState({
                        month: this.state.month + 1
                    })
                }
            }
            if (flag === 'pre') {
                if (this.state.month <= 1) {
                    this.setState({
                        month: 12,
                        year: this.state.year - 1
                    })
                } else {
                    this.setState({
                        month: this.state.month - 1
                    })
                }
            }
        }
    }
    changeYear = flag => {
        return () => {
            if (flag === 'next') {
                this.setState({
                    year: this.state.year + 1
                })
            }
            if (flag === 'pre') {
                this.setState({
                    year: this.state.year - 1
                })
            }
        }
    }
    render() {
        return (
            <div className="container">
                <div className="btnArea">
                    <div className="preYear" onClick={this.changeYear('pre')}>
                        &lt;&lt;
                    </div>
                    <div className="preMonth" onClick={this.changeMonth('pre')}>
                        &lt;
                    </div>
                    <div className="show">
                        {this.state.month} {this.state.year}
                    </div>
                    <div
                        className="nextMonth"
                        onClick={this.changeMonth('next')}
                    >
                        &gt;
                    </div>
                    <div className="nextYear" onClick={this.changeYear('next')}>
                        &gt;&gt;
                    </div>
                </div>
                <div className="weekArea">
                    <div>SUM</div>
                    <div>MON</div>
                    <div>TUE</div>
                    <div>WED</div>
                    <div>THU</div>
                    <div>FRI</div>
                    <div>SAT</div>
                </div>
                <div className="dayArea">{this.dateTemplate()}</div>
            </div>
        )
    }
}
export default Calendar
