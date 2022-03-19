export const imgFileCheck = imgName => {
  var idxDot = imgName.lastIndexOf('.') + 1;
  var extFile = imgName.substr(idxDot, imgName.length).toLowerCase();
  if (extFile === 'jpg' || extFile === 'jpeg' || extFile === 'png') {
    return true;
  } else {
    return false;
  }
};
