const images = require('../resources/resources');

module.exports = (req, res) => {
  // TODO : Mypage로부터 access token을 제대로 받아온 것이 맞다면, 
  // 토큰을 받은 것을 어캐 판단?
  // TODO : resource server의 images를 클라이언트로 보내주세요.
  ///images: 받아온 Access token을 확인한 후,
  // local에 저장되어 있는 resource images를 클라이언트로 보내주는 라우터입니다.
  console.log(req.headers);
  if(!req.headers.authorization){
    //토큰없다
    res.status(403).json({
      message: 'no permission to access resources'
    })
  }
  else{
    //토큰있다
    res.status(200).json({
      images
    })
  }
}