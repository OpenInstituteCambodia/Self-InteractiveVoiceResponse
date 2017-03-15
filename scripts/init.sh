#!/bin/bash

color() {
      printf '\033[%sm%s\033[m\n' "$@"
      # usage color "31;5" "string"
      # 0 default
      # 5 blink, 1 strong, 4 underlined
      # fg: 31 red,  32 green, 33 yellow, 34 blue, 35 purple, 36 cyan, 37 white
      # bg: 40 black, 41 red, 44 blue, 45 purple
      }

color '36;1' "
     This script installs dependencies for the Nylas Sync Engine.
     For more details, visit:
     https://www.github.com/nylas/sync-engine
"

cp ./database/appdata.db ./www/appdata.db
