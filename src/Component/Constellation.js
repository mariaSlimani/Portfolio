import "./Stylesheet/Constellation.css";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Star } from "./../Ressources/images/star.svg";
import { StraightLine} from "./StraightLine";
function Constellation(props) {
  const star1 = useRef(null);
  const star2 = useRef(null);
  const star3 = useRef(null);
  const star4 = useRef(null);
  const star5 = useRef(null);
  const star6 = useRef(null);
  const star7 = useRef(null);
  const line1 = useRef(null);
  const [str1, setStr1] = useState({current:{
    getBoundingClientRect(){return {bottom: 0,
      height: '0',
      left: '0',
      right: '0',
      top: '0',
      width: '0',
      x: '0',
      y: '0'}}
    }})
  let starRefs = [star1, star2, star3, star4, star5, star6, star7,null];
  let starSizes = ['40px', '25px', '36px', '27px', '35px', '25px', '35px','20px'];
  
  const navigate = useNavigate();
  function travel(page) {
    if (props.Current !== page) {
      navigate("/" + page, { replace: false });
    }
  }
  return (
    <div id="constellation" className="const-div">
      {props.Pages.map((page, index) => {
        // check who's current
        // if not not found
        // labels className="const-label"
        return (
          <span
            className={
              "const-star " +
              page +
              (props.Current === page ? "-span" : "-span notCurrent")
            }
            onClick={() => travel(page)}
            title={page}
            key={"const-star " + page + "-span"}
          >
            <Star
            className="const-stars"
              fill={
                props.Current === page ? "var(--orangy)" : "#fbe994"
              }
              stroke="none"
              ref={starRefs[index]}
              height={props.Current === page ? "30px" : starSizes[index]}
              width={props.Current === page ? "30px" : starSizes[index]}
            />
            <label className="const-label" htmlFor={page}>
              {page}
            </label>
          </span>
        );
      })}
      <StraightLine
        startingElement={{
          ref: star1,
          x: "right",
          y: "mid",
        }}
        endingElement={{
          ref: star2,
          x: "left",
          y: "mid",
        }}
        color="white"
        thickness={5}
        className="const-line"
        style={{height:'0', backgroundColor:"none" , borderColor:"white", borderTop:'none', borderLeft:'none', borderRight:'none', borderBottom:'4px dotted white'}}
      />
      <StraightLine
        startingElement={{
          ref: star2,
          x: "right",
          y: "mid",
        }}
        endingElement={{
          ref: star3,
          x: "left",
          y: "mid",
        }}
        color="white"
        thickness={1}
        className="const-line"
        style={{height:'0', backgroundColor:"none" , borderColor:"white", borderTop:'none', borderLeft:'none', borderRight:'none', borderBottom:'4px dotted white'}}
      />
      <StraightLine
        startingElement={{
          ref: star3,
          x: "right",
          y: "mid",
        }}
        endingElement={{
          ref: star4,
          x: "left",
          y: "mid",
        }}
        color="white"
        thickness={1}
        className="const-line"
        style={{height:'0', backgroundColor:"none" , borderColor:"white", borderTop:'none', borderLeft:'none', borderRight:'none', borderBottom:'4px dotted white'}}
      />
      <StraightLine
        startingElement={{
          ref: star4,
          x: "left",
          y: "mid",
        }}
        endingElement={{
          ref: star5,
          x: "right",
          y: "mid",
        }}
        color="white"
        thickness={1}
        className="const-line"
        style={{height:'0', backgroundColor:"none" , borderColor:"white", borderTop:'none', borderLeft:'none', borderRight:'none', borderBottom:'4px dotted white'}}
      />
      <StraightLine
        startingElement={{
          ref: star5,
          x: "right",
          y: "mid",
        }}
        endingElement={{
          ref: star7,
          x: "left",
          y: "mid",
        }}
        color="white"
        thickness={1}
        className="const-line"
        style={{height:'0', backgroundColor:"none" , borderColor:"white", borderTop:'none', borderLeft:'none', borderRight:'none', borderBottom:'4px dotted white'}}
      />
      <StraightLine
        startingElement={{
          ref: star6,
          x: "left",
          y: "mid",
        }}
        endingElement={{
          ref: star7,
          x: "right",
          y: "mid",
        }}
        color="white"
        thickness={1}
        className="const-line"
        style={{height:'0', backgroundColor:"none" , borderColor:"white", borderTop:'none', borderLeft:'none', borderRight:'none', borderBottom:'4px dotted white'}}
      />
      <StraightLine
        startingElement={{
          ref: star4,
          x: "right",
          y: "mid",
        }}
        endingElement={{
          ref: star6,
          x: "left",
          y: "mid",
        }}
        color="white"
        thickness={1}
        className="const-line"
        style={{height:'0', backgroundColor:"none" , borderColor:"white", borderTop:'none', borderLeft:'none', borderRight:'none', borderBottom:'4px dotted white'}}
      />
    </div>
  );
}

export default Constellation;
