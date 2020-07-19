import React, { Component } from 'react'
import AdminDash from '../AdminDash/AdminDash'
import { Line } from 'react-chartjs-2'
class Health extends Component {
    data = () => {
        const d = []
        for (let i = 0; i < 100; i++) {
            d.push(`1-1-${2000 + i}`)
        }
        return d;
    }
    dataSets = () => {
        const data = []
        for (let i = 0; i < 100; i++)
            data.push(i)
        return data
    }

    dataSets2 = () => {
        const data = []
        for (let i = 0; i < 100; i++)
            data.push(i / 2)
        return data
    }

    render() {
        return (
            <>
                <div>
                    <AdminDash />
                    <center>
                        <div style={{ marginTop: "135px", width: "50vw" }}>
                            <Line
                                type='line'
                                data={{
                                    labels: this.data(),
                                    datasets: [{
                                        data: this.dataSets(),
                                        label: 'Infected',
                                        borderColor: '#3333ff',
                                        fill: true,
                                    }, {
                                        data: this.dataSets2(),
                                        label: 'Healthy',
                                        borderColor: 'green',
                                        backgroundColor: 'rgba(255, 0, 0, 0.0)',
                                        fill: true,
                                    },
                                    ],
                                }}
                            />
                        </div>
                    </center>
                </div>
            </>
        )
    }
}

export default Health