#!/usr/bin/env bash

BOT_TOKEN="7025572359:AAHVRu24G7e7yDkeHGxZL_qRp9X0Bek7xsM"

CHAT_ID="-1001839035000"
MESSAGE_THREAD_ID="2008"

# prepare any message you want
SERVER_HOSTNAME="$(hostname)"
LOGIN_IP="$(echo $SSH_CONNECTION | cut -d " " -f 1)"
LOGIN_DATE="$(TZ=Asia/Jakarta date "+%A"), $(TZ=Asia/Jakarta date --iso-8601=second)"
LOGIN_USERNAME="$PAM_USER"

if [ ${PAM_TYPE} = "open_session" ]; then
curl --location -m 1 --request POST "https://api.telegram.org/bot$BOT_TOKEN/sendMessage" \
--header 'Content-Type: application/json' \
--data "{
  \"chat_id\": \"$CHAT_ID\",
  \"message_thread_id\": \"$MESSAGE_THREAD_ID\",
  \"parse_mode\": \"markdown\",
  \"text\": \"*Server Login Notification*\n\r----\n\rServer: *#$SERVER_HOSTNAME*\n\rTanggal: *$LOGIN_DATE*\n\rUsername: *$LOGIN_USERNAME*\n\rIP Address: *$LOGIN_IP*\"
}"
fi
