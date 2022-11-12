import checkApi from './modules/check.js'
import schedule from 'node-schedule'
import config from './config.js'
import sleep from './modules/sleep.js'
import send from './modules/send.js'

const job = () => {
  const results = {
    interceptCount: 0,
    urls: []
  }

  let index = 0
  const check = async () => {
    const { data: res } = await checkApi(config.url[index]).catch(e => {
      console.error(e)
    })
    if (res.data === 1) {
      results.interceptCount++
    }
    results.urls.push({
      url: config.url[index],
      ...res
    })

    if (config.url.length - 1 == index) {
      console.log(results)
      send(results)
    } else {
      await sleep(config.interval)
      index++
      check()
    }
  }

  check()
}

// schedule.scheduleJob(config.cron, job)
job()
