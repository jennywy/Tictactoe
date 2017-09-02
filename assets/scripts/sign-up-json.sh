#!/bin/bash
#works!
# EMAIL="qqq" PASSWORD="qqq" PASSWORD_CONFIRMATION="qqq" sh assets/scripts/sign-up-json.sh

# assets/scripts/sign-up-json.sh
API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/sign-up"

curl --include --request POST "${API}${URL_PATH}"  \
  --header "Content-Type: application/json" \
  --data '{
  "credentials": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PASSWORD}"'",
    "password_confirmation": "'"${PASSWORD_CONFIRMATION}"'"
  }
}'

echo
