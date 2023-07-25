const RgbaDataURL = (r, g, b, a) => {
  const triplet = (e1, e2, e3) => {
    let keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    return keyStr.charAt(e1 >> 2) + keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) + keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) + keyStr.charAt(e3 & 63)
  }

  const alpha = Math.round(a * 255)
  return `data:image/gif;base64,R0lGODlhAQABAPAA${triplet(0, r, g)}${triplet(b, alpha, alpha)}/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`
}

const lightOrange = RgbaDataURL(13, 148, 136, 0.7)
export { lightOrange }
