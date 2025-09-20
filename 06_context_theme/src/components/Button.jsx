import React from 'react'
import useTheme from '../context/theme'

function Button() {

    const {themeMode, lightTheme, darkTheme} = useTheme()
    const onchangebtn = (e) => {
        const darkmodestatue = e.currentTarget.checked;
        if (darkmodestatue) {
            darkTheme()
        }else{
            lightTheme()
        }
    }

  return (
    <div>
      <label htmlFor="toggle">Toggle</label>
      <input  type="checkbox" value="" onChange={onchangebtn} checked={themeMode === "dark"} />
    </div>
  )
}

export default Button

// import React from 'react'
// import useTheme from '../context/theme'

// function Button() {
//   const { themeMode, lightTheme, darkTheme } = useTheme()

//   const onchangebtn = (e) => {
//     const darkmodestatue = e.currentTarget.checked;  // ✅ Correct
//     if (darkmodestatue) {
//       darkTheme()
//     } else {
//       lightTheme()
//     }
//   }

//   return (
//     <div>
//       <label htmlFor="">Toggle</label>
//       <input
//         type="checkbox"
//         onChange={onchangebtn}
//         checked={themeMode === "dark"}
//       />
//     </div>
//   )
// }

// export default Button

