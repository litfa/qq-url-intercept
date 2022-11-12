import config from '../config.js'
import { message, send } from './ws.js'

export default (results) => {
  if (config.bot.enable) {
    send({
      'syncId': 123, // 消息同步的字段
      'command': 'sendGroupMessage', // 命令字
      'content': {
        qq: config.bot.qq,
        group: config.bot.group,
        messageChain: [
          {
            type: 'Plain',
            text: `检测到${results.interceptCount}个网址被拦截\r${results.urls.filter(e => e.data == 1).map(e => `https://txwz.qq.com/wechat/qqurlcomplain?src=3&url=${e.url}
            `).join('\r')}`
          }
        ]
      }
    })
  }
}
