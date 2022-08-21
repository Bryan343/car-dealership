import logoBlack from "assets/logo-black.png"
import logoWhite from "assets/logo-white.png"
import logoMinimalBlack from "assets/logo-minimal-black.png"
import logoMinimalWhite from "assets/logo-minimal-white.png"

const Logo = ({ classParams, white, minimal }) => {
  return (
    <img src={
        white ? 
            minimal ?
            logoMinimalWhite :
            logoWhite
        : minimal ?
            logoMinimalBlack :
            logoBlack
    }
    class={`${classParams} cursor-pointer`}
    alt="Logo" />
  )
}

export default Logo