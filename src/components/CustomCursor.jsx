import AnimatedCursor from "react-animated-cursor"

const CustomCursor = () => {
  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={40}
        color='255, 255, 255'
        outerAlpha={0.2}
        innerScale={0.7}
        innerStyle={{ 
          mixBlendMode: "exclusion",
        }}
        outerScale={2}
        outerStyle={{
          border: '2px solid rgba(255, 255, 255, 1)', 
          backgroundColor: 'transparent', 
          mixBlendMode: "exclusion",
        }}
      />
    </div>
  )
}

export default CustomCursor;