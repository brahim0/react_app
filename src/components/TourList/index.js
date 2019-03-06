import React, { Component } from 'react'
import './index.scss';
import Tour from '../Tour/Tour';
import {tourData} from '../../tourData';
export default class TourList extends Component {
    state={
        tours:tourData
       };
    removeTour=id=>{
        const {tours} = this.state;
        const sortedTour=tours.filter(tour=> tour.id!==id);
        this.setState({
            tours:sortedTour
        });
    }
  render() {
    console.log(this.state.tours);
    const {tours}=this.state;
    return (
    <section className="tourlist">
        {tours.map(tour=>{
            return(
<Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
            );
        })}
    </section>
    )
  }
}
