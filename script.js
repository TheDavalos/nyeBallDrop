const scene = document.querySelector('#scene')
const ball1 = document.querySelector('#ball1')

const sphereRotationSpeed = document.querySelector('#sphereRotationSpeed')
const sphereRotationSpeedLabel = document.querySelector('#sphereRotationSpeedLabel')
const planeXLayersShape = document.querySelector('#planeXLayersShape')
const planeYLayersShape = document.querySelector('#planeYLayersShape')
const planeZLayersShape = document.querySelector('#planeZLayersShape')
const animateXOnOff = document.querySelector('#animateXOnOff')
const animateYOnOff = document.querySelector('#animateYOnOff')
const animateZOnOff = document.querySelector('#animateZOnOff')
const animationXSpeed = document.querySelector('#animationXSpeed')
const animationXSpeedLabel = document.querySelector('#animationXSpeedLabel')
const animationYSpeed = document.querySelector('#animationYSpeed')
const animationYSpeedLabel = document.querySelector('#animationYSpeedLabel')
const animationZSpeed = document.querySelector('#animationZSpeed')
const animationZSpeedLabel = document.querySelector('#animationZSpeedLabel')
const sphereRotationOnOff = document.querySelector('#sphereRotationOnOff')

const layerColorEditBtn = document.querySelector('#layerColorEditBtn')
const colorControlsContainer = document.querySelector('#colorControlsContainer')

const xColorControlsContainer = document.querySelector('#xColorControlsContainer')
const yColorControlsContainer = document.querySelector('#yColorControlsContainer')
const zColorControlsContainer = document.querySelector('#zColorControlsContainer')

const layerBorderEditBtn = document.querySelector('#layerBorderEditBtn')
const borderControlsContainer = document.querySelector('#borderControlsContainer')

const sphereControlsContainer = document.querySelector('#sphereControlsContainer')
const sphereEditBtn = document.querySelector('#sphereEditBtn')

const layersEditBtn = document.querySelector('#layersEditBtn')
const layersControlsContainer = document.querySelector('#layersControlsContainer')

const spherePlaneLayers = document.querySelector('#spherePlaneLayers')
const spherePlaneLayersLabel = document.querySelector('#spherePlaneLayersLabel')

const planeXColorR = document.querySelector('#planeXColorR')
const planeXColorRLabel = document.querySelector('#planeXColorRLabel')

const planeXColorG = document.querySelector('#planeXColorG')
const planeXColorGLabel = document.querySelector('#planeXColorGLabel')

const planeXColorB = document.querySelector('#planeXColorB')
const planeXColorBLabel = document.querySelector('#planeXColorBLabel')

const planeXColorO = document.querySelector('#planeXColorO')
const planeXColorOLabel = document.querySelector('#planeXColorOLabel')

const planeYColorR = document.querySelector('#planeYColorR')
const planeYColorRLabel = document.querySelector('#planeYColorRLabel')

const planeYColorG = document.querySelector('#planeYColorG')
const planeYColorGLabel = document.querySelector('#planeYColorGLabel')

const planeYColorB = document.querySelector('#planeYColorB')
const planeYColorBLabel = document.querySelector('#planeYColorBLabel')

const planeYColorO = document.querySelector('#planeYColorO')
const planeYColorOLabel = document.querySelector('#planeYColorOLabel')

const planeZColorR = document.querySelector('#planeZColorR')
const planeZColorRLabel = document.querySelector('#planeZColorRLabel')

const planeZColorG = document.querySelector('#planeZColorG')
const planeZColorGLabel = document.querySelector('#planeZColorGLabel')

const planeZColorB = document.querySelector('#planeZColorB')
const planeZColorBLabel = document.querySelector('#planeZColorBLabel')

const planeZColorO = document.querySelector('#planeZColorO')
const planeZColorOLabel = document.querySelector('#planeZColorOLabel')


const planeXBorderR = document.querySelector('#planeXBorderR')
const planeXBorderRLabel = document.querySelector('#planeXBorderRLabel')

const planeXBorderG = document.querySelector('#planeXBorderG')
const planeXBorderGLabel = document.querySelector('#planeXBorderGLabel')

const planeXBorderB = document.querySelector('#planeXBorderB')
const planeXBorderBLabel = document.querySelector('#planeXBorderBLabel')

const planeXBorderO = document.querySelector('#planeXBorderO')
const planeXBorderOLabel = document.querySelector('#planeXBorderOLabel')

const planeXBorderSize = document.querySelector('#planeXBorderSize')
const planeXBorderSizeLabel = document.querySelector('#planeXBorderSizeLabel')

const planeXBorderStyle = document.querySelector('#planeXBorderStyle')

const planeYBorderR = document.querySelector('#planeYBorderR')
const planeYBorderRLabel = document.querySelector('#planeYBorderRLabel')

const planeYBorderG = document.querySelector('#planeYBorderG')
const planeYBorderGLabel = document.querySelector('#planeYBorderGLabel')

const planeYBorderB = document.querySelector('#planeYBorderB')
const planeYBorderBLabel = document.querySelector('#planeYBorderBLabel')

const planeYBorderO = document.querySelector('#planeYBorderO')
const planeYBorderOLabel = document.querySelector('#planeYBorderOLabel')

const planeYBorderSize = document.querySelector('#planeYBorderSize')
const planeYBorderSizeLabel = document.querySelector('#planeYBorderSizeLabel')

const planeYBorderStyle = document.querySelector('#planeYBorderStyle')

const planeZBorderR = document.querySelector('#planeZBorderR')
const planeZBorderRLabel = document.querySelector('#planeZBorderRLabel')

const planeZBorderG = document.querySelector('#planeZBorderG')
const planeZBorderGLabel = document.querySelector('#planeZBorderGLabel')

const planeZBorderB = document.querySelector('#planeZBorderB')
const planeZBorderBLabel = document.querySelector('#planeZBorderBLabel')

const planeZBorderO = document.querySelector('#planeZBorderO')
const planeZBorderOLabel = document.querySelector('#planeZBorderOLabel')

const planeZBorderSize = document.querySelector('#planeZBorderSize')
const planeZBorderSizeLabel = document.querySelector('#planeZBorderSizeLabel')

const planeZBorderStyle = document.querySelector('#planeZBorderStyle')

let layers = [0]
let layersPerPlane = 12

spherePlaneLayersLabel.appendChild(document.createTextNode(`${layersPerPlane} layers per dimension`))
spherePlaneLayers.addEventListener('change', (e) => {
  spherePlaneLayersLabel.replaceChildren()
  layersPerPlane = e.target.value
  spherePlaneLayersLabel.appendChild(document.createTextNode(`${layersPerPlane} layers per dimension`))
  createBall()
})
let speed = 0
let direction = "reverse"
sphereRotationSpeedLabel.appendChild(document.createTextNode(`Rotation Speed`))

ball1.style.animation = `moveBall1 ${60 - speed}s linear ${direction} infinite`

sphereRotationOnOff.addEventListener('change', (e) => {
  e.target.value === "on" ? (
    ball1.style.animation = `moveBall1 ${60 - speed}s linear ${direction} infinite`,
    createBall()
  ) : (
    ball1.style.animation = "none",
    createBall()
  )
})

sphereRotationSpeed.addEventListener('change', (e) => {
  sphereRotationSpeedLabel.replaceChildren()
  speed = e.target.value
  sphereRotationSpeedLabel.appendChild(document.createTextNode(`Rotation Speed`))
  ball1.style.animation = `moveBall1 ${60 - speed}s linear ${direction} infinite`
  createBall()
})

sphereRotationDirection.addEventListener('change', (e) => {
  direction = e.target.value
  ball1.style.animation = `moveBall1 ${60 - speed}s linear ${direction} infinite`
  createBall()
})

let xRed = 255
planeXColorRLabel.appendChild(document.createTextNode(`Layer X Red = ${xRed}`))
planeXColorR.addEventListener('change', (e) => {
  planeXColorRLabel.replaceChildren()
  xRed = e.target.value
  planeXColorRLabel.appendChild(document.createTextNode(`Layer X Red = ${xRed}`))
  createBall()
})
let xGreen = 0
planeXColorGLabel.appendChild(document.createTextNode(`Layer X Green = ${xGreen}`))
planeXColorG.addEventListener('change', (e) => {
  planeXColorGLabel.replaceChildren()
  xGreen = e.target.value
  planeXColorGLabel.appendChild(document.createTextNode(`Layer X Green = ${xGreen}`))
  createBall()
})
let xBlue = 0
planeXColorBLabel.appendChild(document.createTextNode(`Layer X Blue = ${xBlue}`))
planeXColorB.addEventListener('change', (e) => {
  planeXColorBLabel.replaceChildren()
  xBlue = e.target.value
  planeXColorBLabel.appendChild(document.createTextNode(`Layer X Blue = ${xBlue}`))
  createBall()
})
let xOpac = 100
planeXColorOLabel.appendChild(document.createTextNode(`Layer X Trans = ${100 - xOpac}%`))
planeXColorO.addEventListener('change', (e) => {
  planeXColorOLabel.replaceChildren()
  xOpac = e.target.value
  planeXColorOLabel.appendChild(document.createTextNode(`Layer X Trans = ${100 - xOpac}%`))
  createBall()
})

let yRed = 255
planeYColorRLabel.appendChild(document.createTextNode(`Layer Y Red = ${yRed}`))
planeYColorR.addEventListener('change', (e) => {
  planeYColorRLabel.replaceChildren()
  yRed = e.target.value
  planeYColorRLabel.appendChild(document.createTextNode(`Layer Y Red = ${yRed}`))
  createBall()
})

let yGreen = 255
planeYColorGLabel.appendChild(document.createTextNode(`Layer Y Green = ${yGreen}`))
planeYColorG.addEventListener('change', (e) => {
  planeYColorGLabel.replaceChildren()
  yGreen = e.target.value
  planeYColorGLabel.appendChild(document.createTextNode(`Layer Y Green = ${yGreen}`))
  createBall()
})
let yBlue = 255
planeYColorBLabel.appendChild(document.createTextNode(`Layer Y Blue = ${yBlue}`))
planeYColorB.addEventListener('change', (e) => {
  planeYColorBLabel.replaceChildren()
  yBlue = e.target.value
  planeYColorBLabel.appendChild(document.createTextNode(`Layer Y Blue = ${yBlue}`))
  createBall()
})
let yOpac = 100
planeYColorOLabel.appendChild(document.createTextNode(`Layer Y Trans = ${100 - yOpac}%`))
planeYColorO.addEventListener('change', (e) => {
  planeYColorOLabel.replaceChildren()
  yOpac = e.target.value
  planeYColorOLabel.appendChild(document.createTextNode(`Layer Y Trans = ${100 - yOpac}%`))
  createBall()
})

let zRed = 0
planeZColorRLabel.appendChild(document.createTextNode(`Layer Z Red = ${zRed}`))
planeZColorR.addEventListener('change', (e) => {
  planeZColorRLabel.replaceChildren()
  zRed = e.target.value
  planeZColorRLabel.appendChild(document.createTextNode(`Layer Z Red = ${zRed}`))
  createBall()
})
let zGreen = 0
planeZColorGLabel.appendChild(document.createTextNode(`Layer Z Green = ${zGreen}`))
planeZColorG.addEventListener('change', (e) => {
  planeZColorGLabel.replaceChildren()
  zGreen = e.target.value
  planeZColorGLabel.appendChild(document.createTextNode(`Layer Z Green = ${zGreen}`))
  createBall()
})
let zBlue = 255
planeZColorBLabel.appendChild(document.createTextNode(`Layer Z Blue = ${zBlue}`))
planeZColorB.addEventListener('change', (e) => {
  planeZColorBLabel.replaceChildren()
  zBlue = e.target.value
  planeZColorBLabel.appendChild(document.createTextNode(`Layer Z Blue = ${zBlue}`))
  createBall()
})
let zOpac = 100
planeZColorOLabel.appendChild(document.createTextNode(`Layer Z Trans = ${100 - zOpac}%`))
planeZColorO.addEventListener('change', (e) => {
  planeZColorOLabel.replaceChildren()
  zOpac = e.target.value
  planeZColorOLabel.appendChild(document.createTextNode(`Layer Z Trans = ${100 - zOpac}%`))
  createBall()
})

let xBorderRed = 255
planeXBorderRLabel.appendChild(document.createTextNode(`Border X Red = ${xBorderRed}`))
planeXBorderR.addEventListener('change', (e) => {
  planeXBorderRLabel.replaceChildren()
  xBorderRed = e.target.value
  planeXBorderRLabel.appendChild(document.createTextNode(`Border X Red = ${xBorderRed}`))
  createBall()
})
planeXBorderG.setAttribute("value", 200)
let xBorderGreen = planeXBorderG.value
planeXBorderGLabel.appendChild(document.createTextNode(`Border X Green = ${xBorderGreen}`))
planeXBorderG.addEventListener('change', (e) => {
  planeXBorderGLabel.replaceChildren()
  xBorderGreen = e.target.value
  planeXBorderGLabel.appendChild(document.createTextNode(`Border X Green = ${xBorderGreen}`))
  createBall()
})
let xBorderBlue = 0
planeXBorderBLabel.appendChild(document.createTextNode(`Border X Blue = ${xBorderBlue}`))
planeXBorderB.addEventListener('change', (e) => {
  planeXBorderBLabel.replaceChildren()
  xBorderBlue = e.target.value
  planeXBorderBLabel.appendChild(document.createTextNode(`Border X Blue = ${xBorderBlue}`))
  createBall()
})
let xBorderOpac = 100
planeXBorderOLabel.appendChild(document.createTextNode(`Border X Trans = ${100 - xBorderOpac}%`))
planeXBorderO.addEventListener('change', (e) => {
  planeXBorderOLabel.replaceChildren()
  xBorderOpac = e.target.value
  planeXBorderOLabel.appendChild(document.createTextNode(`Border X Trans = ${100 - xBorderOpac}%`))
  createBall()
})
let xBorderSize = 25
planeXBorderSizeLabel.appendChild(document.createTextNode(`Border X Size = ${xBorderSize}px`))
planeXBorderSize.addEventListener('change', (e) => {
  planeXBorderSizeLabel.replaceChildren()
  xBorderSize = e.target.value
  planeXBorderSizeLabel.appendChild(document.createTextNode(`Border X Size = ${xBorderSize}px`))
  createBall()
})
let xBorderStyle = 'none'
planeXBorderStyle.addEventListener('change', (e) => {
  xBorderStyle = e.target.value
  createBall()
})

let xBorderRad = "50%"
let layersXClipPath = "none"
let layerXDeg = 180
planeXLayersShape.addEventListener('change', (e) => {
  if (e.target.value === 'circle') {
    xBorderRad = "50%"
    layerXDeg = 180
    layersXClipPath = "none"
  } else if (e.target.value === 'square') {
    xBorderRad = "0%"
    layerXDeg = 180
    layersXClipPath = "none"
  }
  if (e.target.value === 'triangle') {
    xBorderRad = "50%"
    layerXDeg = 360
    layersXClipPath = 'polygon(50% 0%, 8% 75%, 92% 75%)'
  }
  createBall()
})

let animateXValue = "play"
animateXOnOff.addEventListener('change', () => {
  animateXValue = animateXOnOff.value
  createBall()
})
let rotateXEvenOnOffValue = 1
const xEvenRotationOnOff = document.querySelector('#xEvenRotationOnOff')
xEvenRotationOnOff.addEventListener('change', () => {
  rotateXEvenOnOffValue = xEvenRotationOnOff.value * 1
  createBall()
})
let rotateXOddOnOffValue = -1
const xOddRotationOnOff = document.querySelector('#xOddRotationOnOff')
xOddRotationOnOff.addEventListener('change', () => {
  rotateXOddOnOffValue = xOddRotationOnOff.value * 1
  createBall()
})
let animaXSpeed = 300000
animationXSpeedLabel.appendChild(document.createTextNode(`Speed ${animaXSpeed}`))
animationXSpeed.addEventListener('change', (e) => {
  animationXSpeedLabel.replaceChildren()
  animaXSpeed = 600000 - (e.target.value * 1)
  animationXSpeedLabel.appendChild(document.createTextNode(`Speed ${e.target.value}`))
  createBall()
})

let yBorderRed = 255
planeYBorderRLabel.appendChild(document.createTextNode(`Border Y Red = ${yBorderRed}`))
planeYBorderR.addEventListener('change', (e) => {
  planeYBorderRLabel.replaceChildren()
  yBorderRed = e.target.value
  planeYBorderRLabel.appendChild(document.createTextNode(`Border Y Red = ${yBorderRed}`))
  createBall()
})
let yBorderGreen = 255
planeYBorderGLabel.appendChild(document.createTextNode(`Border Y Green = ${yBorderGreen}`))
planeYBorderG.addEventListener('change', (e) => {
  planeYBorderGLabel.replaceChildren()
  yBorderGreen = e.target.value
  planeYBorderGLabel.appendChild(document.createTextNode(`Border Y Green = ${yBorderGreen}`))
  createBall()
})
let yBorderBlue = 255
planeYBorderBLabel.appendChild(document.createTextNode(`Border Y Blue = ${yBorderBlue}`))
planeYBorderB.addEventListener('change', (e) => {
  planeYBorderBLabel.replaceChildren()
  yBorderBlue = e.target.value
  planeYBorderBLabel.appendChild(document.createTextNode(`Border Y Blue = ${yBorderBlue}`))
  createBall()
})
let yBorderOpac = 100
planeYBorderOLabel.appendChild(document.createTextNode(`Border Y Trans = ${100 - yBorderOpac}%`))
planeYBorderO.addEventListener('change', (e) => {
  planeYBorderOLabel.replaceChildren()
  yBorderOpac = e.target.value
  planeYBorderOLabel.appendChild(document.createTextNode(`Border Y Trans = ${100 - yBorderOpac}%`))
  createBall()
})
let yBorderSize = 25
planeYBorderSizeLabel.appendChild(document.createTextNode(`Border Y Size = ${yBorderSize}px`))
planeYBorderSize.addEventListener('change', (e) => {
  planeYBorderSizeLabel.replaceChildren()
  yBorderSize = e.target.value
  planeYBorderSizeLabel.appendChild(document.createTextNode(`Border Y Size = ${yBorderSize}px`))
  createBall()
})
let yBorderStyle = 'none'
planeYBorderStyle.addEventListener('change', (e) => {
  yBorderStyle = e.target.value
  createBall()
})
let yBorderRad = "50%"
let layersYClipPath = "none"
let layerYDeg = 180
planeYLayersShape.addEventListener('change', (e) => {
  if (e.target.value === 'circle') {
    yBorderRad = "50%"
    layerYDeg = 180
    layersYClipPath = "none"
  } else if (e.target.value === 'square') {
    yBorderRad = "0%"
    layerYDeg = 180
    layersYClipPath = "none"
  }
  if (e.target.value === 'triangle') {
    yBorderRad = "50%"
    layerYDeg = 360
    layersYClipPath = 'polygon(50% 0%, 8% 75%, 92% 75%)'
  }
  createBall()
})
let animateYValue = "play"
animateYOnOff.addEventListener('change', () => {
  animateYValue = animateYOnOff.value
  createBall()
})
let rotateYEvenOnOffValue = 1
const yEvenRotationOnOff = document.querySelector('#yEvenRotationOnOff')
yEvenRotationOnOff.addEventListener('change', () => {
  rotateYEvenOnOffValue = yEvenRotationOnOff.value * 1
  createBall()
})
let rotateYOddOnOffValue = -1
const yOddRotationOnOff = document.querySelector('#yOddRotationOnOff')
yOddRotationOnOff.addEventListener('change', () => {
  rotateYOddOnOffValue = yOddRotationOnOff.value * 1
  createBall()
})

let animaYSpeed = 300000
animationYSpeedLabel.appendChild(document.createTextNode(`Speed ${animaYSpeed}`))
animationYSpeed.addEventListener('change', (e) => {
  animationYSpeedLabel.replaceChildren()
  animaYSpeed = 600000 - (e.target.value * 1)
  animationYSpeedLabel.appendChild(document.createTextNode(`Speed ${e.target.value}`))
  createBall()
})
let zBorderRed = 0
planeZBorderRLabel.appendChild(document.createTextNode(`Border Z Red = ${zBorderRed}`))
planeZBorderR.addEventListener('change', (e) => {
  planeZBorderRLabel.replaceChildren()
  zBorderRed = e.target.value
  planeZBorderRLabel.appendChild(document.createTextNode(`Border Z Red = ${zBorderRed}`))
  createBall()
})
let zBorderGreen = 0
planeZBorderGLabel.appendChild(document.createTextNode(`Border Z Green = ${zBorderGreen}`))
planeZBorderG.addEventListener('change', (e) => {
  planeZBorderGLabel.replaceChildren()
  zBorderGreen = e.target.value
  planeZBorderGLabel.appendChild(document.createTextNode(`Border Z Green = ${zBorderGreen}`))
  createBall()
})
let zBorderBlue = 255
planeZBorderBLabel.appendChild(document.createTextNode(`Border Z Blue = ${zBorderBlue}`))
planeZBorderB.addEventListener('change', (e) => {
  planeZBorderBLabel.replaceChildren()
  zBorderBlue = e.target.value
  planeZBorderBLabel.appendChild(document.createTextNode(`Border Z Blue = ${zBorderBlue}`))
  createBall()
})
let zBorderOpac = 100
planeZBorderOLabel.appendChild(document.createTextNode(`Border Z Trans = ${100 - zBorderOpac}%`))
planeZBorderO.addEventListener('change', (e) => {
  planeZBorderOLabel.replaceChildren()
  zBorderOpac = e.target.value
  planeZBorderOLabel.appendChild(document.createTextNode(`Border Z Trans = ${100 - zBorderOpac}%`))
  createBall()
})
let zBorderSize = 25
planeZBorderSizeLabel.appendChild(document.createTextNode(`Border Z Size = ${zBorderSize}px`))
planeZBorderSize.addEventListener('change', (e) => {
  planeZBorderSizeLabel.replaceChildren()
  zBorderSize = e.target.value
  planeZBorderSizeLabel.appendChild(document.createTextNode(`Border Z Size = ${zBorderSize}px`))
  createBall()
})
let zBorderStyle = 'none'
planeZBorderStyle.addEventListener('change', (e) => {
  zBorderStyle = e.target.value
  createBall()
})
let zBorderRad = "50%"
let layersZClipPath = "none"
let layerZDeg = 180
planeZLayersShape.addEventListener('change', (e) => {
  if (e.target.value === 'circle') {
    zBorderRad = "50%"
    layerYDeg = 180
    layersZClipPath = "none"
  } else if (e.target.value === 'square') {
    zBorderRad = "0%"
    layerYDeg = 180
    layersZClipPath = "none"
  }
  if (e.target.value === 'triangle') {
    zBorderRad = "50%"
    layerYDeg = 360
    layersZClipPath = 'polygon(50% 0%, 8% 75%, 92% 75%)'
  }
  createBall()
})
let animateZValue = "play"
animateZOnOff.addEventListener('change', () => {
  animateZValue = animateZOnOff.value
  createBall()
})
let animaZSpeed = 300000
animationZSpeedLabel.appendChild(document.createTextNode(`Speed ${animaZSpeed / 10}`))
animationZSpeed.addEventListener('change', (e) => {
  animationZSpeedLabel.replaceChildren()
  animaZSpeed = 600000 - (e.target.value * 1)
  animationZSpeedLabel.appendChild(document.createTextNode(`Speed ${e.target.value}`))
  createBall()
})
let rotateZEvenOnOffValue = 1
const zEvenRotationOnOff = document.querySelector('#zEvenRotationOnOff')
zEvenRotationOnOff.addEventListener('change', () => {
  rotateZEvenOnOffValue = zEvenRotationOnOff.value * 1
  createBall()
})
let rotateZOddOnOffValue = -1
const zOddRotationOnOff = document.querySelector('#zOddRotationOnOff')
zOddRotationOnOff.addEventListener('change', () => {
  rotateZOddOnOffValue = zOddRotationOnOff.value * 1
  createBall()
})


function createBall() {
  ball1.replaceChildren()
  layers = [0]
  layers.forEach(() => {
    for (let i = 0; i <= (3 * layersPerPlane); i++) {
      layers.push(i)
      if (i % 3 === 0) {
        const layersZ = document.createElement('div')
        if (i !== 0) {
          layersZ.classList = "layers layersZ"
          layersZ.style.transform = `translateX(-10em) translateY(-20em) rotateY(${(i * ((layerZDeg / layersPerPlane) / 3)) - (((layerZDeg / layersPerPlane) / 3) * 3)}deg) rotateZ(0deg)`
          layersZ.style.backgroundColor = `rgba(${zRed}, ${zGreen}, ${zBlue}, ${zOpac / 100})`
          layersZ.style.clipPath = layersZClipPath
          layersZ.style.border = `${zBorderSize}px  ${zBorderStyle} rgba(${zBorderRed}, ${zBorderGreen}, ${zBorderBlue}, ${zBorderOpac / 100}`
          layersZ.style.borderRadius = zBorderRad
          let zBorderRGB = ((zBorderRed*1) + (zBorderGreen*1) +( zBorderBlue*1)) / 2
          if (zBorderStyle !== "none" & zBorderSize > 0 & (zBorderOpac / 100) > .2 & zBorderRGB > 60) {
            layersZ.style.boxShadow = `0 0  ${.4+(zBorderOpac / 100)}em .1em rgba(${zBorderRed}, ${zBorderGreen}, ${zBorderBlue}, ${((zBorderRGB)/3)/255})`
          } else { layersZ.style.boxShadow = "none" }
          
          if (i % 2 === 0) {
            const animateLayersZEven = new KeyframeEffect(
              layersZ,
              [
                { transform: `translateX(-10em) translateY(-20em)  rotateY(90deg) rotateX(${(i * ((layerZDeg / layersPerPlane) / 3)) - (((layerZDeg / layersPerPlane) / 3) * 3)}deg) rotateZ(0deg)` },
                { transform: `translateX(-10em) translateY(-20em)  rotateY(90deg) rotateX(${(i * ((layerZDeg / layersPerPlane) / 3)) - (((layerZDeg / layersPerPlane) / 3) * 3)}deg) rotateZ(${3600 * rotateZEvenOnOffValue}deg)` },
              ],
              {
                duration: animaZSpeed,
                direction: "normal",
                iterations: "Infinity",
              },
            );
            const rollingAnimationZEven = new Animation(animateLayersZEven, document.timeline);
            animateZValue === "play" ? rollingAnimationZEven.play() : rollingAnimationZEven.pause()
          } else {
            const animateLayersZOdd = new KeyframeEffect(
              layersZ,
              [
                { transform: `translateX(-10em) translateY(-20em)  rotateY(90deg) rotateX(${(i * ((layerZDeg / layersPerPlane) / 3)) - (((layerZDeg / layersPerPlane) / 3) * 3)}deg) rotateZ(0deg)` },
                { transform: `translateX(-10em) translateY(-20em)  rotateY(90deg) rotateX(${(i * ((layerZDeg / layersPerPlane) / 3)) - (((layerZDeg / layersPerPlane) / 3) * 3)}deg) rotateZ(${3600 * rotateZOddOnOffValue}deg)` },
              ],
              {
                duration: animaZSpeed,
                direction: "normal",
                iterations: "Infinity",
              },
            );
            const rollingAnimationZOdd = new Animation(animateLayersZOdd, document.timeline);
            animateZValue === "play" ? rollingAnimationZOdd.play() : rollingAnimationZOdd.pause()
          }
          ball1.appendChild(layersZ)
        }
      } else if (i % 3 === 1) {
        const layersX = document.createElement('div')
        layersX.classList = "layers layersX"
        layersX.style.transform = `translateX(-10em) translateY(-20em) rotateX(${(i * ((layerXDeg / layersPerPlane) / 3)) - ((layerXDeg / layersPerPlane) / 3)}deg) rotateZ(0deg)`
        layersX.style.backgroundColor = `rgba(${xRed}, ${xGreen}, ${xBlue}, ${xOpac / 100})`
        layersX.style.clipPath = layersXClipPath
        layersX.style.borderRadius = xBorderRad
        layersX.style.border = `${xBorderSize}px ${xBorderStyle} rgba(${xBorderRed}, ${xBorderGreen}, ${xBorderBlue}, ${xBorderOpac / 100})`
        let xBorderRGB = ((xBorderRed*1) + (xBorderGreen*1) +( xBorderBlue*1)) / 2
          if (xBorderStyle !== "none" & xBorderSize > 0 & (xBorderOpac / 100) > .2 & xBorderRGB > 60) {
            layersX.style.boxShadow = `0 0  ${.4+(xBorderOpac / 100)}em .1em rgba(${xBorderRed}, ${xBorderGreen}, ${xBorderBlue}, ${((xBorderRGB)/3)/255})`
          } else { layersX.style.boxShadow = "none" }
          
        if (i % 2 === 0) {
          const animateLayersXEven = new KeyframeEffect(
            layersX,
            [
              { transform: `translateX(-10em) translateY(-20em) rotateX(${(i * ((layerXDeg / layersPerPlane) / 3)) - (((layerXDeg / layersPerPlane) / 3))}deg) rotateZ(0deg)` },
              { transform: `translateX(-10em) translateY(-20em)  rotateX(${(i * ((layerXDeg / layersPerPlane) / 3)) - (((layerXDeg / layersPerPlane) / 3))}deg) rotateZ(${3600 * rotateXEvenOnOffValue}deg)` },
            ],
            {
              duration: animaXSpeed,
              direction: "normal",
              iterations: "Infinity",
            },
          );
          const rollingAnimationXEven = new Animation(animateLayersXEven, document.timeline);
          animateXValue === "play" ? rollingAnimationXEven.play() : rollingAnimationXEven.pause()
        } else {
          const animateLayersXOdd = new KeyframeEffect(
            layersX,
            [
              { transform: `translateX(-10em) translateY(-20em) rotateX(${(i * ((layerXDeg / layersPerPlane) / 3)) - (((layerXDeg / layersPerPlane) / 3))}deg) rotateZ(0deg)` },
              { transform: `translateX(-10em) translateY(-20em) rotateX(${(i * ((layerXDeg / layersPerPlane) / 3)) - (((layerXDeg / layersPerPlane) / 3))}deg) rotateZ(${3600 * rotateXOddOnOffValue}deg)` },
            ],
            {
              duration: animaXSpeed,
              direction: "normal",
              iterations: "Infinity",
            },
          );
          const rollingAnimationXOdd = new Animation(animateLayersXOdd, document.timeline);
          animateXValue === "play" ? rollingAnimationXOdd.play() : rollingAnimationXOdd.pause()
        }
        ball1.appendChild(layersX)
      } else {
        const layersY = document.createElement('div')
        layersY.classList = "layers layersY"
        layersY.style.transform = `translateX(-10em) translateY(-20em)  rotateY(90deg) rotateX(${(i * ((layerYDeg / layersPerPlane) / 3)) - (((layerYDeg / layersPerPlane) / 3) * 2)}deg) rotateZ(0deg)`
        layersY.style.backgroundColor = `rgba(${yRed}, ${yGreen}, ${yBlue}, ${yOpac / 100})`
        layersY.style.clipPath = layersYClipPath
        layersY.style.borderRadius = yBorderRad
        layersY.style.border = `${yBorderSize}px ${yBorderStyle} rgba(${yBorderRed}, ${yBorderGreen}, ${yBorderBlue}, ${yBorderOpac / 100})`
        let yBorderRGB = ((yBorderRed*1) + (yBorderGreen*1) +( yBorderBlue*1)) / 2
          if (yBorderStyle !== "none" & yBorderSize > 0 & (yBorderOpac / 100) > .2 & yBorderRGB > 60) {
            layersY.style.boxShadow = `0 0  ${.4+(yBorderOpac / 100)}em .1em rgba(${yBorderRed}, ${yBorderGreen}, ${yBorderBlue}, ${((yBorderRGB)/3)/255})`
          } else { layersY.style.boxShadow = "none" }
        if (i % 2 === 0) {
          const animateLayersYEven = new KeyframeEffect(
            layersY,
            [
              { transform: `translateX(-10em) translateY(-20em) rotateY(${(i * ((layerYDeg / layersPerPlane) / 3)) - (((layerYDeg / layersPerPlane) / 3) * 2)}deg) rotateZ(0deg)` },
              { transform: `translateX(-10em) translateY(-20em) rotateY(${(i * ((layerYDeg / layersPerPlane) / 3)) - (((layerYDeg / layersPerPlane) / 3) * 2)}deg) rotateZ(${3600 * rotateYEvenOnOffValue}deg)` },
            ],
            {
              duration: animaYSpeed,
              direction: "normal",
              iterations: "Infinity",
            },
          );
          const rollingAnimationYEven = new Animation(animateLayersYEven, document.timeline);
          animateYValue === "play" ? rollingAnimationYEven.play() : rollingAnimationYEven.pause()
        } else {
          const animateLayersYOdd = new KeyframeEffect(
            layersY,
            [
              { transform: `translateX(-10em) translateY(-20em) rotateY(${(i * ((layerYDeg / layersPerPlane) / 3)) - (((layerYDeg / layersPerPlane) / 3) * 2)}deg) rotateZ(0deg)` },
              { transform: `translateX(-10em) translateY(-20em) rotateY(${(i * ((layerYDeg / layersPerPlane) / 3)) - (((layerYDeg / layersPerPlane) / 3) * 2)}deg) rotateZ(${3600 * rotateYOddOnOffValue}deg)` },
            ],
            {
              duration: animaYSpeed,
              direction: "normal",
              iterations: "Infinity",
            },
          );
          const rollingAnimationYOdd = new Animation(animateLayersYOdd, document.timeline);
          animateYValue === "play" ? rollingAnimationYOdd.play() : rollingAnimationYOdd.pause()
        }
        ball1.appendChild(layersY)
      }
    }
  })
}

createBall()

function allControlsDisplayNone() {
  colorControlsContainer.style.display = "none",
  borderControlsContainer.style.display = "none",
  layersControlsContainer.style.display = "none",
  sphereControlsContainer.style.display = "none"
}
allControlsDisplayNone()

layerColorEditBtn.addEventListener('click', () => {
  colorControlsContainer.style.display === "none" ? (
    allControlsDisplayNone(),
    colorControlsContainer.style.display = "grid"
  ) : (
    colorControlsContainer.style.display = "none"
  )
})

layerBorderEditBtn.addEventListener('click', () => {
  borderControlsContainer.style.display === "none" ? (
    allControlsDisplayNone(),
    borderControlsContainer.style.display = "grid"
  ) : (
    borderControlsContainer.style.display = "none"
  )
})

sphereEditBtn.addEventListener('click', () => {
  sphereControlsContainer.style.display === "none" ? (
    allControlsDisplayNone(),
    sphereControlsContainer.style.display = "grid"
  ) : (
    sphereControlsContainer.style.display = "none"
  )
})

layersControlsContainer.style.display = "none"
layersEditBtn.addEventListener('click', () => {
  layersControlsContainer.style.display === "none" ? (
    allControlsDisplayNone(),
    layersControlsContainer.style.display = "grid"
  ) : (
    layersControlsContainer.style.display = "none"
  )
})

addEventListener('click', (e) => { e.target.id === "body" && allControlsDisplayNone() })
