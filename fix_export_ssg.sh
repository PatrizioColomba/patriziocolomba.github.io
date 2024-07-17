#!/bin/bash
touch out/.nojekyll
find "out" -type f -exec sed -i 's#"/_next/#"./_next/#g' {} +