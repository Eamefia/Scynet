import React from 'react'
  
const Progress_bar = ({bgcolor,progress,height}) => {
     const container = {
      width: "100%",
      textAlign: 'center'
     }
    const Parentdiv = {
        width: "45%",
        height: height,
        backgroundColor: '#2B6372',
        borderRadius: 40,
        right: 0,
        left: 0,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 15,
        textAlign: 'center'
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
       borderRadius:40,
        textAlign: 'right'
      }
        
    return (
    <div style={container}>
      <div style={Parentdiv}>
        <div style={Childdiv}>
        
        </div>
      </div>
    </div>
    )
}
  
export default Progress_bar;