import axios from 'axios'

export default (url) => {
  return axios({
    method: 'GET',
    url: 'https://cgi.urlsec.qq.com/index.php?',
    params: {
      m: 'gwComplainMergeIntoWechat',
      a: 'checkBlackStatus',
      callback: '',
      url,
      _: Date.now()
    }
  })
}
