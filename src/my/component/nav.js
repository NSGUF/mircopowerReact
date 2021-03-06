/**
 * Created by ZhifengFang on 2017/6/6.
 */
import React from 'react';
import LiItem from '../../foot/liItem'

export default class Nav extends React.Component {
    render() {
        let id = 0;
        let mines = [
            {
                infoLink: '/my/projects',
                infoName: '全部'
            }, {
                infoLink: '/my/success',
                infoName: '已成功'
            }, {
                infoLink: '/my/going',
                infoName: '进行中'
            }, {
                infoLink: '/my/fail',
                infoName: '失败'
            }
        ]
        return (
            <div className="top-nav" key={id++}>
                <div className="menu">
                    <ul id="nav">
                        {mines.map((mine) => (
                            <LiItem infoLink={mine.infoLink} infoName={mine.infoName} key={id++}/>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}