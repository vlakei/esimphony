function FindProxyForURL(url, host) {
    // Direct connection for localhost and local IP addresses
    if (isPlainHostName(host) ||
        shExpMatch(host, "*.local") ||
        isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
        isInNet(dnsResolve(host), "172.16.0.0", "255.240.0.0") ||
        isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0")) {
        return "DIRECT";
    }

    // Use proxy for Workz
    if (shExpMatch(host, "upwork.com") ||
        shExpMatch(host, "*.upwork.com") ||
        shExpMatch(host, "2ip.ua")) {
        return "PROXY ua-1.stableproxy.com:11001";
    } else if (shExpMatch(host, "mesh.rsp.world") ||
	       shExpMatch(host, "server.mesh.rsp.world") ||
	       shExpMatch(host, "ota.workz.com") ||
	       shExpMatch(host, "*.rsp.world") ||
               shExpMatch(host, "whatismyipaddress.com")) {
        return "PROXY ua-1.stableproxy.com:11003";
    }

    // Default to a direct connection for all other requests
    return "DIRECT";
}
