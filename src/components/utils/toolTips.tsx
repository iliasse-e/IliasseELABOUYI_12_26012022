export const AverageSessionCustomTooltip = ({ active, payload, label }: any) => {
    if (active) {
      return (
        <div className="custom-tooltip" style={{backgroundColor: "white",
        padding:"1px 10px"}}>
          <p className="label">{`${payload?.[0].value} min`}</p>
        </div>
      );
    }
  
    return null;
};

export const ActivityCustomTooltip = ({ active, payload, label }: any) => {
    if (active) {
      return (
        <div className="custom-tooltip" style={{backgroundColor: "red", 
        color:"white",
        padding:"1px 10px"}}>
          <p className="label">{`${payload?.[0].value}kg`}</p>
          <p className="label">{`${payload?.[1].value}kCal`}</p>
        </div>
      );
    }
  
    return null;
};