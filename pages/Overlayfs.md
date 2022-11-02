- ## 试用性
	- ### xfs
		- The overlay and overlay2 drivers are supported on xfs backing filesystems, but only with d_type=true enabled.
		- Use xfs_info to verify that the ftype option is set to 1. To format an xfs filesystem correctly, use the flag -n ftype=1.
		- ```bash
		  mkfs.xfs -f -n ftype=1 /dev/centos/root
		  ```