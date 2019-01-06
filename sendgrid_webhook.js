const localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: 'lkasllqwroi' }, (err, tunnel) => {
	console.log('LT running')
})