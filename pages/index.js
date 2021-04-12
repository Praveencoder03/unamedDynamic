import React from 'react';
import Image from 'next/image';


class Task extends React.Component {
  constructor() {
    super()

    this.state = {
      london: false,
      paris: false,
      frankfurt: false,
      city: ""
    };
  }

  handleShow = (e) => {
    this.setState({ city: e.target.value })
  }
  render() {
    const event = new Date();
    console.log(this.state.city)
    return (
      <div>
        <select className="select" onChange={this.handleShow}>
          <option className="option">
            --select--</option>
          <option value="london" className="option">
            London</option>
          <option value="Paris" className="option">
            Paris</option>
          <option value="Frankfurt" className="option">
            Frankfurt</option>

        </select>

        <div className="image">
          {this.state.city === "london" &&
            <>
              <Image src="/london.png"
                width={900}
                height={500}
              />  <p>{event.toLocaleString('en-GB', { timeZone: `Europe/${this.state.city}` })}</p>
            </>}
          {this.state.city === "Paris" &&
            <>
              <Image src="/paris.png"
                width={900}   
                height={500}

              />       <p>{event.toLocaleString('en-GB', { timeZone: `Europe/${this.state.city}` })}</p>

            </>
          }
          {this.state.city === "Frankfurt" &&
            <>   <Image src="/frankfurt.png"
              width={900}
              height={500}
            /> <p>
              {/* {event.toLocaleString('en-GB', { timeZone: `${this.state.city}` })} */}
              </p> </>}
        </div>

        <style>{`
       
.select{
  margin-left:25%;
  width: 50%;
  color: black;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: 800;
  background-image: linear-gradient(rgb(6, 74, 248), rgb(235, 18, 18));
  border: 10%;
  border-radius:2%;
  padding:1%;
  color:white;

  
}
.option{
  padding:1%;
  border-radius:12%;
  color:black;
}
.image{
  margin-top:2%;
  margin-left:17%
}
`}
        </style>
      </div>
    )
  }
}

export default Task;


