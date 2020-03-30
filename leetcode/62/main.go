func lastRemaining(n int, m int) int {
	p :=0;
	for i :=2;i<=n;i++ {
		p=(p+m)%i;
	}
	return p;
}
