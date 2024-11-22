const scene = document.querySelector('#scene')
const ball1 = document.querySelector('#ball1')

const sphereRotationSpeed = document.querySelector('#sphereRotationSpeed')
const sphereRotationSpeedLabel = document.querySelector('#sphereRotationSpeedLabel')
const sphereRotationDirection = document.querySelector('#sphereRotationDirection')
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
const sphereRotationOn = document.querySelector('#sphereRotationOn')
const sphereRotationOff = document.querySelector('#sphereRotationOff')

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

spherePlaneLayers.setAttribute("value", 12)
sphereRotationSpeed.setAttribute("value", 0)

planeXColorR.setAttribute("value", 20)
planeXColorG.setAttribute("value", 20)
planeXColorB.setAttribute("value", 20)
planeXColorO.setAttribute("value", 50)

planeYColorR.setAttribute("value", 200)
planeYColorG.setAttribute("value", 20)
planeYColorB.setAttribute("value", 20)
planeYColorO.setAttribute("value", 50)

planeZColorR.setAttribute("value", 20)
planeZColorG.setAttribute("value", 20)
planeZColorB.setAttribute("value", 200)
planeZColorO.setAttribute("value", 50)

planeXBorderSize.setAttribute("value", 3)
planeXBorderR.setAttribute("value", 200)
planeXBorderG.setAttribute("value", 20)
planeXBorderB.setAttribute("value", 200)
planeXBorderO.setAttribute("value", 100)

planeYBorderSize.setAttribute("value", 10)
planeYBorderR.setAttribute("value", 0)
planeYBorderG.setAttribute("value", 0)
planeYBorderB.setAttribute("value", 0)
planeYBorderO.setAttribute("value", 100)

planeZBorderSize.setAttribute("value", 3)
planeZBorderR.setAttribute("value", 100)
planeZBorderG.setAttribute("value", 0)
planeZBorderB.setAttribute("value", 255)
planeZBorderO.setAttribute("value", 100)

spherePlaneLayersLabel.appendChild(document.createTextNode(`${spherePlaneLayers.value} layers per dimension`))
spherePlaneLayers.addEventListener('change', () => {
  spherePlaneLayersLabel.replaceChildren(document.createTextNode(`${spherePlaneLayers.value} layers per dimension`))
  createBall()
})

let isOn = "selected"
sphereRotationOff.setAttribute("selected", true)
sphereRotationOff.removeAttribute(`${isOn}`)

console.log(sphereRotationOff.selected)
let direction = "reverse"
sphereRotationSpeedLabel.appendChild(document.createTextNode(`Rotation Speed`))
if (sphereRotationOff.selected === false) {ball1.style.animation = `moveBall1 ${60 - sphereRotationSpeed.value}s linear ${direction} infinite`}

sphereRotationOnOff.addEventListener('change', (e) => {
  e.target.value === "on" ? (
    ball1.style.animation = `moveBall1 ${60 - sphereRotationSpeed.value}s linear ${direction} infinite`,
    createBall()
  ) : (
    ball1.style.animation = "none",
    createBall()
  )
  console.log(sphereRotationOnOff.value)
})

sphereRotationSpeed.addEventListener('change', () => {
  sphereRotationSpeedLabel.replaceChildren(document.createTextNode(`Rotation Speed`))
  ball1.style.animation = `moveBall1 ${60 - sphereRotationSpeed.value}s linear ${direction} infinite`
  createBall()
})

sphereRotationDirection.addEventListener('change', (e) => {
  direction = e.target.value
  ball1.style.animation = `moveBall1 ${60 - sphereRotationSpeed.value}s linear ${direction} infinite`
  createBall()
})

planeXColorRLabel.appendChild(document.createTextNode(`Layer X Red = ${planeXColorR.value}`))
planeXColorR.addEventListener('change', () => {
  planeXColorRLabel.replaceChildren(document.createTextNode(`Layer X Red = ${planeXColorR.value}`))
  createBall()
})
planeXColorGLabel.appendChild(document.createTextNode(`Layer X Green = ${planeXColorG.value}`))
planeXColorG.addEventListener('change', () => {
  planeXColorGLabel.replaceChildren(document.createTextNode(`Layer X Green = ${planeXColorG.value}`))
  createBall()
})

planeXColorBLabel.appendChild(document.createTextNode(`Layer X Blue = ${planeXColorB.value}`))
planeXColorB.addEventListener('change', () => {
  planeXColorBLabel.replaceChildren(document.createTextNode(`Layer X Blue = ${planeXColorB.value}`))
  createBall()
})

planeXColorOLabel.appendChild(document.createTextNode(`Layer X Trans = ${100 - planeXColorO.value}%`))
planeXColorO.addEventListener('change', () => {
  planeXColorOLabel.replaceChildren(document.createTextNode(`Layer X Trans = ${100 - planeXColorO.value}%`))
  createBall()
})


planeYColorRLabel.appendChild(document.createTextNode(`Layer Y Red = ${planeYColorR.value}`))
planeYColorR.addEventListener('change', () => {
  planeYColorRLabel.replaceChildren(document.createTextNode(`Layer Y Red = ${planeYColorR.value}`))
  createBall()
})

planeYColorGLabel.appendChild(document.createTextNode(`Layer Y Green = ${planeYColorG.value}`))
planeYColorG.addEventListener('change', () => {
  planeYColorGLabel.replaceChildren(document.createTextNode(`Layer Y Green = ${planeYColorG.value}`))
  createBall()
})

planeYColorBLabel.appendChild(document.createTextNode(`Layer Y Blue = ${planeYColorB.value}`))
planeYColorB.addEventListener('change', () => {
  planeYColorBLabel.replaceChildren(document.createTextNode(`Layer Y Blue = ${planeYColorB.value}`))
  createBall()
})

planeYColorOLabel.appendChild(document.createTextNode(`Layer Y Trans = ${100 - planeYColorO.value}%`))
planeYColorO.addEventListener('change', () => {
  planeYColorOLabel.replaceChildren(document.createTextNode(`Layer Y Trans = ${100 - planeYColorO.value}%`))
  createBall()
})


planeZColorRLabel.appendChild(document.createTextNode(`Layer Z Red = ${planeZColorR.value}`))
planeZColorR.addEventListener('change', () => {
  planeZColorRLabel.replaceChildren(document.createTextNode(`Layer Z Red = ${planeZColorR.value}`))
  createBall()
})

planeZColorGLabel.appendChild(document.createTextNode(`Layer Z Green = ${planeZColorG.value}`))
planeZColorG.addEventListener('change', () => {
  planeZColorGLabel.replaceChildren(document.createTextNode(`Layer Z Green = ${planeZColorG.value}`))
  createBall()
})

planeZColorBLabel.appendChild(document.createTextNode(`Layer Z Blue = ${planeZColorB.value}`))
planeZColorB.addEventListener('change', () => {
  planeZColorBLabel.replaceChildren(document.createTextNode(`Layer Z Blue = ${planeZColorB.value}`))
  createBall()
})

planeZColorOLabel.appendChild(document.createTextNode(`Layer Z Trans = ${100 - planeZColorO.value}%`))
planeZColorO.addEventListener('change', () => {
  planeZColorOLabel.replaceChildren(document.createTextNode(`Layer Z Trans = ${100 - planeZColorO.value}%`))
  createBall()
})


planeXBorderRLabel.appendChild(document.createTextNode(`Border X Red = ${planeXBorderR.value}`))
planeXBorderR.addEventListener('change', () => {
  planeXBorderRLabel.replaceChildren(document.createTextNode(`Border X Red = ${planeXBorderR.value}`))
  createBall()
})

planeXBorderGLabel.appendChild(document.createTextNode(`Border X Green = ${planeXBorderG.value}`))
planeXBorderG.addEventListener('change', () => {
  planeXBorderGLabel.replaceChildren(document.createTextNode(`Border X Green = ${planeXBorderG.value}`))
  createBall()
})

planeXBorderBLabel.appendChild(document.createTextNode(`Border X Blue = ${planeXBorderB.value}`))
planeXBorderB.addEventListener('change', () => {
  planeXBorderBLabel.replaceChildren(document.createTextNode(`Border X Blue = ${planeXBorderB.value}`))
  createBall()
})

planeXBorderOLabel.appendChild(document.createTextNode(`Border X Trans = ${planeXBorderO.value}%`))
planeXBorderO.addEventListener('change', () => {
  planeXBorderOLabel.replaceChildren(document.createTextNode(`Border X Trans = ${planeXBorderO.value}%`))
  createBall()
})

planeXBorderSizeLabel.appendChild(document.createTextNode(`Border X Size = ${planeXBorderSize.value}px`))
planeXBorderSize.addEventListener('change', () => {
  planeXBorderSizeLabel.replaceChildren(document.createTextNode(`Border X Size = ${planeXBorderSize.value}px`))
  createBall()
})
let xBorderStyle = 'solid'
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


planeYBorderRLabel.appendChild(document.createTextNode(`Border Y Red = ${planeYBorderR.value}`))
planeYBorderR.addEventListener('change', () => {
  planeYBorderRLabel.replaceChildren(document.createTextNode(`Border Y Red = ${planeYBorderR.value}`))
  createBall()
})

planeYBorderGLabel.appendChild(document.createTextNode(`Border Y Green = ${planeYBorderG.value}`))
planeYBorderG.addEventListener('change', () => {
  planeYBorderGLabel.replaceChildren(document.createTextNode(`Border Y Green = ${planeYBorderG.value}`))
  createBall()
})

planeYBorderBLabel.appendChild(document.createTextNode(`Border Y Blue = ${planeYBorderB.value}`))
planeYBorderB.addEventListener('change', () => {
  planeYBorderBLabel.replaceChildren(document.createTextNode(`Border Y Blue = ${planeYBorderB.value}`))
  createBall()
})

planeYBorderOLabel.appendChild(document.createTextNode(`Border Y Trans = ${planeYBorderO.value}%`))
planeYBorderO.addEventListener('change', () => {
  planeYBorderOLabel.replaceChildren(document.createTextNode(`Border Y Trans = ${planeYBorderO.value}%`))
  createBall()
})

planeYBorderSizeLabel.appendChild(document.createTextNode(`Border Y Size = ${planeYBorderSize.value}px`))
planeYBorderSize.addEventListener('change', () => {
  planeYBorderSizeLabel.replaceChildren(document.createTextNode(`Border Y Size = ${planeYBorderSize.value}px`))
  createBall()
})
let yBorderStyle = 'solid'
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


planeZBorderRLabel.appendChild(document.createTextNode(`Border Z Red = ${planeZBorderR.value}`))
planeZBorderR.addEventListener('change', () => {
  planeZBorderRLabel.replaceChildren(document.createTextNode(`Border Z Red = ${planeZBorderR.value}`))
  createBall()
})

planeZBorderGLabel.appendChild(document.createTextNode(`Border Z Green = ${planeZBorderG.value}`))
planeZBorderG.addEventListener('change', () => {
  planeZBorderGLabel.replaceChildren(document.createTextNode(`Border Z Green = ${planeZBorderG.value}`))
  createBall()
})

planeZBorderBLabel.appendChild(document.createTextNode(`Border Z Blue = ${planeZBorderB.value}`))
planeZBorderB.addEventListener('change', () => {
  planeZBorderBLabel.replaceChildren(document.createTextNode(`Border Z Blue = ${planeZBorderB.value}`))
  createBall()
})

planeZBorderOLabel.appendChild(document.createTextNode(`Border Z Trans = ${planeZBorderO.value}%`))
planeZBorderO.addEventListener('change', () => {
  planeZBorderOLabel.replaceChildren(document.createTextNode(`Border Z Trans = ${planeZBorderO.value}%`))
  createBall()
})

planeZBorderSizeLabel.appendChild(document.createTextNode(`Border Z Size = ${planeZBorderSize.value}px`))
planeZBorderSize.addEventListener('change', () => {
  planeZBorderSizeLabel.replaceChildren(document.createTextNode(`Border Z Size = ${planeZBorderSize.value}px`))
  createBall()
})
let zBorderStyle = 'solid'
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

let layers = [0]
function createBall() {
  ball1.replaceChildren()
  layers = [0]
  layers.forEach(() => {
    for (let i = 0; i <= (3 * spherePlaneLayers.value); i++) {
      layers.push(i)
      if (i % 3 === 0) {
        const layersZ = document.createElement('div')
        if (i !== 0) {
          layersZ.classList = "layers layersZ"
          layersZ.style.transform = `translateX(-10em) translateY(-20em) rotateY(${(i * ((layerZDeg / spherePlaneLayers.value) / 3)) - (((layerZDeg / spherePlaneLayers.value) / 3) * 3)}deg) rotateZ(0deg)`
          layersZ.style.backgroundColor = `rgba(${planeZColorR.value}, ${planeZColorG.value}, ${planeZColorB.value}, ${planeZColorO.value / 100})`
          layersZ.style.clipPath = layersZClipPath
          layersZ.style.border = `${planeZBorderSize.value}px  ${zBorderStyle} rgba(${planeZBorderR.value}, ${planeZBorderG.value}, ${planeZBorderB.value}, ${planeZBorderO.value / 100}`
          layersZ.style.borderRadius = zBorderRad
          let zBorderRGB = ((planeZBorderR.value*1) + (planeZBorderG.value*1) +( planeZBorderB.value*1)) / 2
          if (zBorderStyle !== "none" & planeZBorderSize.value > 0 & (planeZBorderO.value / 100) > .2 & zBorderRGB > 60) {
            layersZ.style.boxShadow = `0 0  ${.4+(planeZBorderO.value / 100)}em .1em rgba(${planeZBorderR.value}, ${planeZBorderG.value}, ${planeZBorderB.value}, ${((zBorderRGB)/3)/255})`
          } else { layersZ.style.boxShadow = "none" }
          
          if (i % 2 === 0) {
            const animateLayersZEven = new KeyframeEffect(
              layersZ,
              [
                { transform: `translateX(-10em) translateY(-20em)  rotateY(90deg) rotateX(${(i * ((layerZDeg / spherePlaneLayers.value) / 3)) - (((layerZDeg / spherePlaneLayers.value) / 3) * 3)}deg) rotateZ(0deg)` },
                { transform: `translateX(-10em) translateY(-20em)  rotateY(90deg) rotateX(${(i * ((layerZDeg / spherePlaneLayers.value) / 3)) - (((layerZDeg / spherePlaneLayers.value) / 3) * 3)}deg) rotateZ(${3600 * rotateZEvenOnOffValue}deg)` },
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
                { transform: `translateX(-10em) translateY(-20em)  rotateY(90deg) rotateX(${(i * ((layerZDeg / spherePlaneLayers.value) / 3)) - (((layerZDeg / spherePlaneLayers.value) / 3) * 3)}deg) rotateZ(0deg)` },
                { transform: `translateX(-10em) translateY(-20em)  rotateY(90deg) rotateX(${(i * ((layerZDeg / spherePlaneLayers.value) / 3)) - (((layerZDeg / spherePlaneLayers.value) / 3) * 3)}deg) rotateZ(${3600 * rotateZOddOnOffValue}deg)` },
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
        layersX.style.transform = `translateX(-10em) translateY(-20em) rotateX(${(i * ((layerXDeg / spherePlaneLayers.value) / 3)) - ((layerXDeg / spherePlaneLayers.value) / 3)}deg) rotateZ(0deg)`
        layersX.style.backgroundColor = `rgba(${planeXColorR.value}, ${planeXColorG.value}, ${planeXColorB.value}, ${planeXColorO.value / 100})`
        layersX.style.clipPath = layersXClipPath
        layersX.style.borderRadius = xBorderRad
        layersX.style.border = `${planeXBorderSize.value}px ${xBorderStyle} rgba(${planeXBorderR.value}, ${planeXBorderG.value}, ${planeXBorderB.value}, ${planeXBorderO.value / 100})`
        let xBorderRGB = ((planeXBorderR.value*1) + (planeXBorderG.value*1) +( planeXBorderB.value*1)) / 2
          if (xBorderStyle !== "none" & planeXBorderSize.value > 0 & (planeXBorderO.value / 100) > .2 & xBorderRGB > 60) {
            layersX.style.boxShadow = `0 0  ${.4+(planeXBorderO.value / 100)}em .1em rgba(${planeXBorderR.value}, ${planeXBorderG.value}, ${planeXBorderB.value}, ${((xBorderRGB)/3)/255})`
          } else { layersX.style.boxShadow = "none" }
          
        if (i % 2 === 0) {
          const animateLayersXEven = new KeyframeEffect(
            layersX,
            [
              { transform: `translateX(-10em) translateY(-20em) rotateX(${(i * ((layerXDeg / spherePlaneLayers.value) / 3)) - (((layerXDeg / spherePlaneLayers.value) / 3))}deg) rotateZ(0deg)` },
              { transform: `translateX(-10em) translateY(-20em)  rotateX(${(i * ((layerXDeg / spherePlaneLayers.value) / 3)) - (((layerXDeg / spherePlaneLayers.value) / 3))}deg) rotateZ(${3600 * rotateXEvenOnOffValue}deg)` },
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
              { transform: `translateX(-10em) translateY(-20em) rotateX(${(i * ((layerXDeg / spherePlaneLayers.value) / 3)) - (((layerXDeg / spherePlaneLayers.value) / 3))}deg) rotateZ(0deg)` },
              { transform: `translateX(-10em) translateY(-20em) rotateX(${(i * ((layerXDeg / spherePlaneLayers.value) / 3)) - (((layerXDeg / spherePlaneLayers.value) / 3))}deg) rotateZ(${3600 * rotateXOddOnOffValue}deg)` },
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
        layersY.style.transform = `translateX(-10em) translateY(-20em)  rotateY(90deg) rotateX(${(i * ((layerYDeg / spherePlaneLayers.value) / 3)) - (((layerYDeg / spherePlaneLayers.value) / 3) * 2)}deg) rotateZ(0deg)`
        layersY.style.backgroundColor = `rgba(${planeYColorR.value}, ${planeYColorG.value}, ${planeYColorB.value}, ${planeYColorO.value / 100})`
        layersY.style.clipPath = layersYClipPath
        layersY.style.borderRadius = yBorderRad
        layersY.style.border = `${planeYBorderSize.value}px ${yBorderStyle} rgba(${planeYBorderR.value}, ${planeYBorderG.value}, ${planeYBorderB.value}, ${planeYBorderO.value / 100})`
        let yBorderRGB = ((planeYBorderR.value*1) + (planeYBorderG.value*1) +( planeYBorderB.value*1)) / 2
          if (yBorderStyle !== "none" & planeYBorderSize.value > 0 & (planeYBorderO.value / 100) > .2 & yBorderRGB > 60) {
            layersY.style.boxShadow = `0 0  ${.4+(planeYBorderO.value / 100)}em .1em rgba(${planeYBorderR.value}, ${planeYBorderG.value}, ${planeYBorderB.value}, ${((yBorderRGB)/3)/255})`
          } else { layersY.style.boxShadow = "none" }
        if (i % 2 === 0) {
          const animateLayersYEven = new KeyframeEffect(
            layersY,
            [
              { transform: `translateX(-10em) translateY(-20em) rotateY(${(i * ((layerYDeg / spherePlaneLayers.value) / 3)) - (((layerYDeg / spherePlaneLayers.value) / 3) * 2)}deg) rotateZ(0deg)` },
              { transform: `translateX(-10em) translateY(-20em) rotateY(${(i * ((layerYDeg / spherePlaneLayers.value) / 3)) - (((layerYDeg / spherePlaneLayers.value) / 3) * 2)}deg) rotateZ(${3600 * rotateYEvenOnOffValue}deg)` },
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
              { transform: `translateX(-10em) translateY(-20em) rotateY(${(i * ((layerYDeg / spherePlaneLayers.value) / 3)) - (((layerYDeg / spherePlaneLayers.value) / 3) * 2)}deg) rotateZ(0deg)` },
              { transform: `translateX(-10em) translateY(-20em) rotateY(${(i * ((layerYDeg / spherePlaneLayers.value) / 3)) - (((layerYDeg / spherePlaneLayers.value) / 3) * 2)}deg) rotateZ(${3600 * rotateYOddOnOffValue}deg)` },
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
