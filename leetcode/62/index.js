var lastRemaining = function(n, m) {
    let p=0;
	for(let i=2;i<=n;i++)
	{
		p=(p+m)%i;
	}
	return p;
};