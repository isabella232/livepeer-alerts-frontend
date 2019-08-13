const DAILY_FREQUENCY = 'daily'
const WEEKLY_FREQUENCY = 'weekly'
const SUPPORTED_FREQUENCIES = [DAILY_FREQUENCY, WEEKLY_FREQUENCY]
const MAX_RETRIES = process.env.REACT_APP_MAX_RETRIES || 5
const TELEGRAM_CHAT_URL = process.env.REACT_APP_TELEGRAM_CHAT_URL || 'https://t.me/livepeertools'
module.exports = {
  DAILY_FREQUENCY,
  WEEKLY_FREQUENCY,
  SUPPORTED_FREQUENCIES,
  MAX_RETRIES,
  TELEGRAM_CHAT_URL,
}
