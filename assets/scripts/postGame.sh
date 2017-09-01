# TOKEN="BAhJIiU5NTdlMGY0NDcxYzJiMWZmMDdkZDQzNGQzNTFjN2I2NAY6BkVG--6fdf3ea66d9414ba76ffca99f04f4526c2f30ab8" sh assets/scripts/postGame.sh

API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/games"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Authorization: Token token=${TOKEN}"
