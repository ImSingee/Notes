- ```bash
  wget "https://busybox.net/downloads/binaries/1.35.0-i686-linux-musl/busybox" -O /tmp/busybox
  adb push /tmp/busybox /data/data/busybox
  adb shell "mount -o remount,rw /system && mv /data/data/busybox /system/bin/busybox && chmod 755 /system/bin/busybox && /system/bin/busybox --install /system/bin"
  ```