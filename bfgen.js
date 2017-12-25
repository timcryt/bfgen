function abs(n) {
	return Math.abs(n);
}

function findoptik(n) {
	var mink=1, minsum = n + 1;
	for (var i = n-1; i > 1; i--) {
		var k1 = i, k2 = (n/k1)^0, ost = abs(n-k1*k2);
		if (k1+k2+ost<minsum) {
			mink = i;
			minsum=k1+k2+ost;
		}
	}
	return mink;
}


function xsmb(smb,x) {
	var o = '';
	for(var i = 0; i < x; i++) {
		o += smb;
	}
	return o;
}

function gensmb(c,p) {
	var mc,nmc,ds=abs(c-p),o='';
	if (c-p > 0) {
		mc = '+';
		nmc = '-';
	} else {
		mc = '-';
		nmc = '+'
	}
	if (ds > 0) {
		var k1 = findoptik(ds), k2 = (ds/k1)^0, ost = ds-k1*k2, negf = (ost < 0);
		ost = abs(ost);
		if (k1+k2+ost+8 > ds) {
			o += xsmb(mc,ds);
		} else {
			o += '>' + xsmb('+',k1) + '[<' + xsmb(mc,k2) + '>-]<' + xsmb((negf) ? (nmc) : (mc), ost);
		}
	}
	return o;
}

function gencode() {
	var p = 0, st = input.value, o = '';
	for (var i = 0; i < st.length; i++) {
		var c = st.charCodeAt(i),mc,nmc;
		o += gensmb(c,p)+'.';
		p = c;
	}
	output.value = o;
	textsize.value = st.length;
	codesize.value = o.length;
}
