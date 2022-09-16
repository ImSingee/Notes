- ```bash
  wget "http://www.busybox.net/downloads/binaries/latest/busybox-i486" -O /tmp/busybox
  adb push /tmp/busybox /data/data/busybox
  adb shell "mount -o remount,rw /system && mv /data/data/busybox /system/bin/busybox && chmod 755 /system/bin/busybox && /system/bin/busybox --install /system/bin"
  ```