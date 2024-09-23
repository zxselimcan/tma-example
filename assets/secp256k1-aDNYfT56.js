import{b8 as Pt,b9 as Ft,ba as Gt,bb as Ot,bc as Wt,bd as Xt,be as Dt,bf as Qt}from"./index-Bg91R9I6.js";/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Ut=BigInt(0),ht=BigInt(1),Jt=BigInt(2);function nt(e){return e instanceof Uint8Array||e!=null&&typeof e=="object"&&e.constructor.name==="Uint8Array"}function lt(e){if(!nt(e))throw new Error("Uint8Array expected")}const te=Array.from({length:256},(e,n)=>n.toString(16).padStart(2,"0"));function st(e){lt(e);let n="";for(let t=0;t<e.length;t++)n+=te[e[t]];return n}function Rt(e){const n=e.toString(16);return n.length&1?`0${n}`:n}function Bt(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);return BigInt(e===""?"0":`0x${e}`)}const P={_0:48,_9:57,_A:65,_F:70,_a:97,_f:102};function Nt(e){if(e>=P._0&&e<=P._9)return e-P._0;if(e>=P._A&&e<=P._F)return e-(P._A-10);if(e>=P._a&&e<=P._f)return e-(P._a-10)}function ct(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);const n=e.length,t=n/2;if(n%2)throw new Error("padded hex string expected, got unpadded hex of length "+n);const r=new Uint8Array(t);for(let s=0,i=0;s<t;s++,i+=2){const l=Nt(e.charCodeAt(i)),c=Nt(e.charCodeAt(i+1));if(l===void 0||c===void 0){const o=e[i]+e[i+1];throw new Error('hex string expected, got non-hex character "'+o+'" at index '+i)}r[s]=l*16+c}return r}function et(e){return Bt(st(e))}function xt(e){return lt(e),Bt(st(Uint8Array.from(e).reverse()))}function ft(e,n){return ct(e.toString(16).padStart(n*2,"0"))}function vt(e,n){return ft(e,n).reverse()}function ee(e){return ct(Rt(e))}function M(e,n,t){let r;if(typeof n=="string")try{r=ct(n)}catch(i){throw new Error(`${e} must be valid hex string, got "${n}". Cause: ${i}`)}else if(nt(n))r=Uint8Array.from(n);else throw new Error(`${e} must be hex string or Uint8Array`);const s=r.length;if(typeof t=="number"&&s!==t)throw new Error(`${e} expected ${t} bytes, got ${s}`);return r}function ut(...e){let n=0;for(let r=0;r<e.length;r++){const s=e[r];lt(s),n+=s.length}const t=new Uint8Array(n);for(let r=0,s=0;r<e.length;r++){const i=e[r];t.set(i,s),s+=i.length}return t}function ne(e,n){if(e.length!==n.length)return!1;let t=0;for(let r=0;r<e.length;r++)t|=e[r]^n[r];return t===0}function re(e){if(typeof e!="string")throw new Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}function oe(e){let n;for(n=0;e>Ut;e>>=ht,n+=1);return n}function ie(e,n){return e>>BigInt(n)&ht}function se(e,n,t){return e|(t?ht:Ut)<<BigInt(n)}const It=e=>(Jt<<BigInt(e-1))-ht,wt=e=>new Uint8Array(e),_t=e=>Uint8Array.from(e);function Ct(e,n,t){if(typeof e!="number"||e<2)throw new Error("hashLen must be a number");if(typeof n!="number"||n<2)throw new Error("qByteLen must be a number");if(typeof t!="function")throw new Error("hmacFn must be a function");let r=wt(e),s=wt(e),i=0;const l=()=>{r.fill(1),s.fill(0),i=0},c=(...w)=>t(s,r,...w),o=(w=wt())=>{s=c(_t([0]),w),r=c(),w.length!==0&&(s=c(_t([1]),w),r=c())},a=()=>{if(i++>=1e3)throw new Error("drbg: tried 1000 values");let w=0;const q=[];for(;w<n;){r=c();const T=r.slice();q.push(T),w+=r.length}return ut(...q)};return(w,q)=>{l(),o(w);let T;for(;!(T=q(a()));)o();return l(),T}}const ce={bigint:e=>typeof e=="bigint",function:e=>typeof e=="function",boolean:e=>typeof e=="boolean",string:e=>typeof e=="string",stringOrUint8Array:e=>typeof e=="string"||nt(e),isSafeInteger:e=>Number.isSafeInteger(e),array:e=>Array.isArray(e),field:(e,n)=>n.Fp.isValid(e),hash:e=>typeof e=="function"&&Number.isSafeInteger(e.outputLen)};function dt(e,n,t={}){const r=(s,i,l)=>{const c=ce[i];if(typeof c!="function")throw new Error(`Invalid validator "${i}", expected function`);const o=e[s];if(!(l&&o===void 0)&&!c(o,e))throw new Error(`Invalid param ${String(s)}=${o} (${typeof o}), expected ${i}`)};for(const[s,i]of Object.entries(n))r(s,i,!1);for(const[s,i]of Object.entries(t))r(s,i,!0);return e}const fe=Object.freeze(Object.defineProperty({__proto__:null,abytes:lt,bitGet:ie,bitLen:oe,bitMask:It,bitSet:se,bytesToHex:st,bytesToNumberBE:et,bytesToNumberLE:xt,concatBytes:ut,createHmacDrbg:Ct,ensureBytes:M,equalBytes:ne,hexToBytes:ct,hexToNumber:Bt,isBytes:nt,numberToBytesBE:ft,numberToBytesLE:vt,numberToHexUnpadded:Rt,numberToVarBytesBE:ee,utf8ToBytes:re,validateObject:dt},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const L=BigInt(0),$=BigInt(1),J=BigInt(2),ae=BigInt(3),yt=BigInt(4),Tt=BigInt(5),$t=BigInt(8);BigInt(9);BigInt(16);function R(e,n){const t=e%n;return t>=L?t:n+t}function ue(e,n,t){if(t<=L||n<L)throw new Error("Expected power/modulo > 0");if(t===$)return L;let r=$;for(;n>L;)n&$&&(r=r*e%t),e=e*e%t,n>>=$;return r}function V(e,n,t){let r=e;for(;n-- >L;)r*=r,r%=t;return r}function bt(e,n){if(e===L||n<=L)throw new Error(`invert: expected positive integers, got n=${e} mod=${n}`);let t=R(e,n),r=n,s=L,i=$;for(;t!==L;){const c=r/t,o=r%t,a=s-i*c;r=t,t=o,s=i,i=a}if(r!==$)throw new Error("invert: does not exist");return R(s,n)}function le(e){const n=(e-$)/J;let t,r,s;for(t=e-$,r=0;t%J===L;t/=J,r++);for(s=J;s<e&&ue(s,n,e)!==e-$;s++);if(r===1){const l=(e+$)/yt;return function(o,a){const y=o.pow(a,l);if(!o.eql(o.sqr(y),a))throw new Error("Cannot find square root");return y}}const i=(t+$)/J;return function(c,o){if(c.pow(o,n)===c.neg(c.ONE))throw new Error("Cannot find square root");let a=r,y=c.pow(c.mul(c.ONE,s),t),w=c.pow(o,i),q=c.pow(o,t);for(;!c.eql(q,c.ONE);){if(c.eql(q,c.ZERO))return c.ZERO;let T=1;for(let f=c.sqr(q);T<a&&!c.eql(f,c.ONE);T++)f=c.sqr(f);const b=c.pow(y,$<<BigInt(a-T-1));y=c.sqr(b),w=c.mul(w,b),q=c.mul(q,y),a=T}return w}}function de(e){if(e%yt===ae){const n=(e+$)/yt;return function(r,s){const i=r.pow(s,n);if(!r.eql(r.sqr(i),s))throw new Error("Cannot find square root");return i}}if(e%$t===Tt){const n=(e-Tt)/$t;return function(r,s){const i=r.mul(s,J),l=r.pow(i,n),c=r.mul(s,l),o=r.mul(r.mul(c,J),l),a=r.mul(c,r.sub(o,r.ONE));if(!r.eql(r.sqr(a),s))throw new Error("Cannot find square root");return a}}return le(e)}const he=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function ge(e){const n={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},t=he.reduce((r,s)=>(r[s]="function",r),n);return dt(e,t)}function we(e,n,t){if(t<L)throw new Error("Expected power > 0");if(t===L)return e.ONE;if(t===$)return n;let r=e.ONE,s=n;for(;t>L;)t&$&&(r=e.mul(r,s)),s=e.sqr(s),t>>=$;return r}function pe(e,n){const t=new Array(n.length),r=n.reduce((i,l,c)=>e.is0(l)?i:(t[c]=i,e.mul(i,l)),e.ONE),s=e.inv(r);return n.reduceRight((i,l,c)=>e.is0(l)?i:(t[c]=e.mul(i,t[c]),e.mul(i,l)),s),t}function zt(e,n){const t=n!==void 0?n:e.toString(2).length,r=Math.ceil(t/8);return{nBitLength:t,nByteLength:r}}function ye(e,n,t=!1,r={}){if(e<=L)throw new Error(`Expected Field ORDER > 0, got ${e}`);const{nBitLength:s,nByteLength:i}=zt(e,n);if(i>2048)throw new Error("Field lengths over 2048 bytes are not supported");const l=de(e),c=Object.freeze({ORDER:e,BITS:s,BYTES:i,MASK:It(s),ZERO:L,ONE:$,create:o=>R(o,e),isValid:o=>{if(typeof o!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof o}`);return L<=o&&o<e},is0:o=>o===L,isOdd:o=>(o&$)===$,neg:o=>R(-o,e),eql:(o,a)=>o===a,sqr:o=>R(o*o,e),add:(o,a)=>R(o+a,e),sub:(o,a)=>R(o-a,e),mul:(o,a)=>R(o*a,e),pow:(o,a)=>we(c,o,a),div:(o,a)=>R(o*bt(a,e),e),sqrN:o=>o*o,addN:(o,a)=>o+a,subN:(o,a)=>o-a,mulN:(o,a)=>o*a,inv:o=>bt(o,e),sqrt:r.sqrt||(o=>l(c,o)),invertBatch:o=>pe(c,o),cmov:(o,a,y)=>y?a:o,toBytes:o=>t?vt(o,i):ft(o,i),fromBytes:o=>{if(o.length!==i)throw new Error(`Fp.fromBytes: expected ${i}, got ${o.length}`);return t?xt(o):et(o)}});return Object.freeze(c)}function kt(e){if(typeof e!="bigint")throw new Error("field order must be bigint");const n=e.toString(2).length;return Math.ceil(n/8)}function Vt(e){const n=kt(e);return n+Math.ceil(n/2)}function be(e,n,t=!1){const r=e.length,s=kt(n),i=Vt(n);if(r<16||r<i||r>1024)throw new Error(`expected ${i}-1024 bytes of input, got ${r}`);const l=t?et(e):xt(e),c=R(l,n-$)+$;return t?vt(c,s):ft(c,s)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const me=BigInt(0),pt=BigInt(1);function Ee(e,n){const t=(s,i)=>{const l=i.negate();return s?l:i},r=s=>{const i=Math.ceil(n/s)+1,l=2**(s-1);return{windows:i,windowSize:l}};return{constTimeNegate:t,unsafeLadder(s,i){let l=e.ZERO,c=s;for(;i>me;)i&pt&&(l=l.add(c)),c=c.double(),i>>=pt;return l},precomputeWindow(s,i){const{windows:l,windowSize:c}=r(i),o=[];let a=s,y=a;for(let w=0;w<l;w++){y=a,o.push(y);for(let q=1;q<c;q++)y=y.add(a),o.push(y);a=y.double()}return o},wNAF(s,i,l){const{windows:c,windowSize:o}=r(s);let a=e.ZERO,y=e.BASE;const w=BigInt(2**s-1),q=2**s,T=BigInt(s);for(let b=0;b<c;b++){const f=b*o;let d=Number(l&w);l>>=T,d>o&&(d-=q,l+=pt);const h=f,m=f+Math.abs(d)-1,B=b%2!==0,S=d<0;d===0?y=y.add(t(B,i[h])):a=a.add(t(S,i[m]))}return{p:a,f:y}},wNAFCached(s,i,l,c){const o=s._WINDOW_SIZE||1;let a=i.get(s);return a||(a=this.precomputeWindow(s,o),o!==1&&i.set(s,c(a))),this.wNAF(o,a,l)}}}function jt(e){return ge(e.Fp),dt(e,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...zt(e.n,e.nBitLength),...e,p:e.Fp.ORDER})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Be(e){const n=jt(e);dt(n,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:t,Fp:r,a:s}=n;if(t){if(!r.eql(s,r.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof t!="object"||typeof t.beta!="bigint"||typeof t.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...n})}const{bytesToNumberBE:xe,hexToBytes:ve}=fe,tt={Err:class extends Error{constructor(n=""){super(n)}},_parseInt(e){const{Err:n}=tt;if(e.length<2||e[0]!==2)throw new n("Invalid signature integer tag");const t=e[1],r=e.subarray(2,t+2);if(!t||r.length!==t)throw new n("Invalid signature integer: wrong length");if(r[0]&128)throw new n("Invalid signature integer: negative");if(r[0]===0&&!(r[1]&128))throw new n("Invalid signature integer: unnecessary leading zero");return{d:xe(r),l:e.subarray(t+2)}},toSig(e){const{Err:n}=tt,t=typeof e=="string"?ve(e):e;lt(t);let r=t.length;if(r<2||t[0]!=48)throw new n("Invalid signature tag");if(t[1]!==r-2)throw new n("Invalid signature: incorrect length");const{d:s,l:i}=tt._parseInt(t.subarray(2)),{d:l,l:c}=tt._parseInt(i);if(c.length)throw new n("Invalid signature: left bytes after parsing");return{r:s,s:l}},hexFromSig(e){const n=a=>Number.parseInt(a[0],16)&8?"00"+a:a,t=a=>{const y=a.toString(16);return y.length&1?`0${y}`:y},r=n(t(e.s)),s=n(t(e.r)),i=r.length/2,l=s.length/2,c=t(i),o=t(l);return`30${t(l+i+4)}02${o}${s}02${c}${r}`}},F=BigInt(0),j=BigInt(1);BigInt(2);const Ht=BigInt(3);BigInt(4);function Ie(e){const n=Be(e),{Fp:t}=n,r=n.toBytes||((b,f,d)=>{const h=f.toAffine();return ut(Uint8Array.from([4]),t.toBytes(h.x),t.toBytes(h.y))}),s=n.fromBytes||(b=>{const f=b.subarray(1),d=t.fromBytes(f.subarray(0,t.BYTES)),h=t.fromBytes(f.subarray(t.BYTES,2*t.BYTES));return{x:d,y:h}});function i(b){const{a:f,b:d}=n,h=t.sqr(b),m=t.mul(h,b);return t.add(t.add(m,t.mul(b,f)),d)}if(!t.eql(t.sqr(n.Gy),i(n.Gx)))throw new Error("bad generator point: equation left != right");function l(b){return typeof b=="bigint"&&F<b&&b<n.n}function c(b){if(!l(b))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function o(b){const{allowedPrivateKeyLengths:f,nByteLength:d,wrapPrivateKey:h,n:m}=n;if(f&&typeof b!="bigint"){if(nt(b)&&(b=st(b)),typeof b!="string"||!f.includes(b.length))throw new Error("Invalid key");b=b.padStart(d*2,"0")}let B;try{B=typeof b=="bigint"?b:et(M("private key",b,d))}catch{throw new Error(`private key must be ${d} bytes, hex or bigint, not ${typeof b}`)}return h&&(B=R(B,m)),c(B),B}const a=new Map;function y(b){if(!(b instanceof w))throw new Error("ProjectivePoint expected")}class w{constructor(f,d,h){if(this.px=f,this.py=d,this.pz=h,f==null||!t.isValid(f))throw new Error("x required");if(d==null||!t.isValid(d))throw new Error("y required");if(h==null||!t.isValid(h))throw new Error("z required")}static fromAffine(f){const{x:d,y:h}=f||{};if(!f||!t.isValid(d)||!t.isValid(h))throw new Error("invalid affine point");if(f instanceof w)throw new Error("projective point not allowed");const m=B=>t.eql(B,t.ZERO);return m(d)&&m(h)?w.ZERO:new w(d,h,t.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(f){const d=t.invertBatch(f.map(h=>h.pz));return f.map((h,m)=>h.toAffine(d[m])).map(w.fromAffine)}static fromHex(f){const d=w.fromAffine(s(M("pointHex",f)));return d.assertValidity(),d}static fromPrivateKey(f){return w.BASE.multiply(o(f))}_setWindowSize(f){this._WINDOW_SIZE=f,a.delete(this)}assertValidity(){if(this.is0()){if(n.allowInfinityPoint&&!t.is0(this.py))return;throw new Error("bad point: ZERO")}const{x:f,y:d}=this.toAffine();if(!t.isValid(f)||!t.isValid(d))throw new Error("bad point: x or y not FE");const h=t.sqr(d),m=i(f);if(!t.eql(h,m))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:f}=this.toAffine();if(t.isOdd)return!t.isOdd(f);throw new Error("Field doesn't support isOdd")}equals(f){y(f);const{px:d,py:h,pz:m}=this,{px:B,py:S,pz:I}=f,p=t.eql(t.mul(d,I),t.mul(B,m)),E=t.eql(t.mul(h,I),t.mul(S,m));return p&&E}negate(){return new w(this.px,t.neg(this.py),this.pz)}double(){const{a:f,b:d}=n,h=t.mul(d,Ht),{px:m,py:B,pz:S}=this;let I=t.ZERO,p=t.ZERO,E=t.ZERO,v=t.mul(m,m),k=t.mul(B,B),_=t.mul(S,S),A=t.mul(m,B);return A=t.add(A,A),E=t.mul(m,S),E=t.add(E,E),I=t.mul(f,E),p=t.mul(h,_),p=t.add(I,p),I=t.sub(k,p),p=t.add(k,p),p=t.mul(I,p),I=t.mul(A,I),E=t.mul(h,E),_=t.mul(f,_),A=t.sub(v,_),A=t.mul(f,A),A=t.add(A,E),E=t.add(v,v),v=t.add(E,v),v=t.add(v,_),v=t.mul(v,A),p=t.add(p,v),_=t.mul(B,S),_=t.add(_,_),v=t.mul(_,A),I=t.sub(I,v),E=t.mul(_,k),E=t.add(E,E),E=t.add(E,E),new w(I,p,E)}add(f){y(f);const{px:d,py:h,pz:m}=this,{px:B,py:S,pz:I}=f;let p=t.ZERO,E=t.ZERO,v=t.ZERO;const k=n.a,_=t.mul(n.b,Ht);let A=t.mul(d,B),C=t.mul(h,S),z=t.mul(m,I),G=t.add(d,h),u=t.add(B,S);G=t.mul(G,u),u=t.add(A,C),G=t.sub(G,u),u=t.add(d,m);let g=t.add(B,I);return u=t.mul(u,g),g=t.add(A,z),u=t.sub(u,g),g=t.add(h,m),p=t.add(S,I),g=t.mul(g,p),p=t.add(C,z),g=t.sub(g,p),v=t.mul(k,u),p=t.mul(_,z),v=t.add(p,v),p=t.sub(C,v),v=t.add(C,v),E=t.mul(p,v),C=t.add(A,A),C=t.add(C,A),z=t.mul(k,z),u=t.mul(_,u),C=t.add(C,z),z=t.sub(A,z),z=t.mul(k,z),u=t.add(u,z),A=t.mul(C,u),E=t.add(E,A),A=t.mul(g,u),p=t.mul(G,p),p=t.sub(p,A),A=t.mul(G,C),v=t.mul(g,v),v=t.add(v,A),new w(p,E,v)}subtract(f){return this.add(f.negate())}is0(){return this.equals(w.ZERO)}wNAF(f){return T.wNAFCached(this,a,f,d=>{const h=t.invertBatch(d.map(m=>m.pz));return d.map((m,B)=>m.toAffine(h[B])).map(w.fromAffine)})}multiplyUnsafe(f){const d=w.ZERO;if(f===F)return d;if(c(f),f===j)return this;const{endo:h}=n;if(!h)return T.unsafeLadder(this,f);let{k1neg:m,k1:B,k2neg:S,k2:I}=h.splitScalar(f),p=d,E=d,v=this;for(;B>F||I>F;)B&j&&(p=p.add(v)),I&j&&(E=E.add(v)),v=v.double(),B>>=j,I>>=j;return m&&(p=p.negate()),S&&(E=E.negate()),E=new w(t.mul(E.px,h.beta),E.py,E.pz),p.add(E)}multiply(f){c(f);let d=f,h,m;const{endo:B}=n;if(B){const{k1neg:S,k1:I,k2neg:p,k2:E}=B.splitScalar(d);let{p:v,f:k}=this.wNAF(I),{p:_,f:A}=this.wNAF(E);v=T.constTimeNegate(S,v),_=T.constTimeNegate(p,_),_=new w(t.mul(_.px,B.beta),_.py,_.pz),h=v.add(_),m=k.add(A)}else{const{p:S,f:I}=this.wNAF(d);h=S,m=I}return w.normalizeZ([h,m])[0]}multiplyAndAddUnsafe(f,d,h){const m=w.BASE,B=(I,p)=>p===F||p===j||!I.equals(m)?I.multiplyUnsafe(p):I.multiply(p),S=B(this,d).add(B(f,h));return S.is0()?void 0:S}toAffine(f){const{px:d,py:h,pz:m}=this,B=this.is0();f==null&&(f=B?t.ONE:t.inv(m));const S=t.mul(d,f),I=t.mul(h,f),p=t.mul(m,f);if(B)return{x:t.ZERO,y:t.ZERO};if(!t.eql(p,t.ONE))throw new Error("invZ was invalid");return{x:S,y:I}}isTorsionFree(){const{h:f,isTorsionFree:d}=n;if(f===j)return!0;if(d)return d(w,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:f,clearCofactor:d}=n;return f===j?this:d?d(w,this):this.multiplyUnsafe(n.h)}toRawBytes(f=!0){return this.assertValidity(),r(w,this,f)}toHex(f=!0){return st(this.toRawBytes(f))}}w.BASE=new w(n.Gx,n.Gy,t.ONE),w.ZERO=new w(t.ZERO,t.ONE,t.ZERO);const q=n.nBitLength,T=Ee(w,n.endo?Math.ceil(q/2):q);return{CURVE:n,ProjectivePoint:w,normPrivateKeyToScalar:o,weierstrassEquation:i,isWithinCurveOrder:l}}function Se(e){const n=jt(e);return dt(n,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...n})}function Ae(e){const n=Se(e),{Fp:t,n:r}=n,s=t.BYTES+1,i=2*t.BYTES+1;function l(u){return F<u&&u<t.ORDER}function c(u){return R(u,r)}function o(u){return bt(u,r)}const{ProjectivePoint:a,normPrivateKeyToScalar:y,weierstrassEquation:w,isWithinCurveOrder:q}=Ie({...n,toBytes(u,g,x){const N=g.toAffine(),O=t.toBytes(N.x),H=ut;return x?H(Uint8Array.from([g.hasEvenY()?2:3]),O):H(Uint8Array.from([4]),O,t.toBytes(N.y))},fromBytes(u){const g=u.length,x=u[0],N=u.subarray(1);if(g===s&&(x===2||x===3)){const O=et(N);if(!l(O))throw new Error("Point is not on curve");const H=w(O);let Z;try{Z=t.sqrt(H)}catch(Y){const X=Y instanceof Error?": "+Y.message:"";throw new Error("Point is not on curve"+X)}const U=(Z&j)===j;return(x&1)===1!==U&&(Z=t.neg(Z)),{x:O,y:Z}}else if(g===i&&x===4){const O=t.fromBytes(N.subarray(0,t.BYTES)),H=t.fromBytes(N.subarray(t.BYTES,2*t.BYTES));return{x:O,y:H}}else throw new Error(`Point of length ${g} was invalid. Expected ${s} compressed bytes or ${i} uncompressed bytes`)}}),T=u=>st(ft(u,n.nByteLength));function b(u){const g=r>>j;return u>g}function f(u){return b(u)?c(-u):u}const d=(u,g,x)=>et(u.slice(g,x));class h{constructor(g,x,N){this.r=g,this.s=x,this.recovery=N,this.assertValidity()}static fromCompact(g){const x=n.nByteLength;return g=M("compactSignature",g,x*2),new h(d(g,0,x),d(g,x,2*x))}static fromDER(g){const{r:x,s:N}=tt.toSig(M("DER",g));return new h(x,N)}assertValidity(){if(!q(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!q(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(g){return new h(this.r,this.s,g)}recoverPublicKey(g){const{r:x,s:N,recovery:O}=this,H=E(M("msgHash",g));if(O==null||![0,1,2,3].includes(O))throw new Error("recovery id invalid");const Z=O===2||O===3?x+n.n:x;if(Z>=t.ORDER)throw new Error("recovery id 2 or 3 invalid");const U=O&1?"03":"02",W=a.fromHex(U+T(Z)),Y=o(Z),X=c(-H*Y),at=c(N*Y),D=a.BASE.multiplyAndAddUnsafe(W,X,at);if(!D)throw new Error("point at infinify");return D.assertValidity(),D}hasHighS(){return b(this.s)}normalizeS(){return this.hasHighS()?new h(this.r,c(-this.s),this.recovery):this}toDERRawBytes(){return ct(this.toDERHex())}toDERHex(){return tt.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return ct(this.toCompactHex())}toCompactHex(){return T(this.r)+T(this.s)}}const m={isValidPrivateKey(u){try{return y(u),!0}catch{return!1}},normPrivateKeyToScalar:y,randomPrivateKey:()=>{const u=Vt(n.n);return be(n.randomBytes(u),n.n)},precompute(u=8,g=a.BASE){return g._setWindowSize(u),g.multiply(BigInt(3)),g}};function B(u,g=!0){return a.fromPrivateKey(u).toRawBytes(g)}function S(u){const g=nt(u),x=typeof u=="string",N=(g||x)&&u.length;return g?N===s||N===i:x?N===2*s||N===2*i:u instanceof a}function I(u,g,x=!0){if(S(u))throw new Error("first arg must be private key");if(!S(g))throw new Error("second arg must be public key");return a.fromHex(g).multiply(y(u)).toRawBytes(x)}const p=n.bits2int||function(u){const g=et(u),x=u.length*8-n.nBitLength;return x>0?g>>BigInt(x):g},E=n.bits2int_modN||function(u){return c(p(u))},v=It(n.nBitLength);function k(u){if(typeof u!="bigint")throw new Error("bigint expected");if(!(F<=u&&u<v))throw new Error(`bigint expected < 2^${n.nBitLength}`);return ft(u,n.nByteLength)}function _(u,g,x=A){if(["recovered","canonical"].some(Q=>Q in x))throw new Error("sign() legacy options not supported");const{hash:N,randomBytes:O}=n;let{lowS:H,prehash:Z,extraEntropy:U}=x;H==null&&(H=!0),u=M("msgHash",u),Z&&(u=M("prehashed msgHash",N(u)));const W=E(u),Y=y(g),X=[k(Y),k(W)];if(U!=null&&U!==!1){const Q=U===!0?O(t.BYTES):U;X.push(M("extraEntropy",Q))}const at=ut(...X),D=W;function gt(Q){const rt=p(Q);if(!q(rt))return;const St=o(rt),ot=a.BASE.multiply(rt).toAffine(),K=c(ot.x);if(K===F)return;const it=c(St*c(D+K*Y));if(it===F)return;let At=(ot.x===K?0:2)|Number(ot.y&j),qt=it;return H&&b(it)&&(qt=f(it),At^=1),new h(K,qt,At)}return{seed:at,k2sig:gt}}const A={lowS:n.lowS,prehash:!1},C={lowS:n.lowS,prehash:!1};function z(u,g,x=A){const{seed:N,k2sig:O}=_(u,g,x),H=n;return Ct(H.hash.outputLen,H.nByteLength,H.hmac)(N,O)}a.BASE._setWindowSize(8);function G(u,g,x,N=C){var ot;const O=u;if(g=M("msgHash",g),x=M("publicKey",x),"strict"in N)throw new Error("options.strict was renamed to lowS");const{lowS:H,prehash:Z}=N;let U,W;try{if(typeof O=="string"||nt(O))try{U=h.fromDER(O)}catch(K){if(!(K instanceof tt.Err))throw K;U=h.fromCompact(O)}else if(typeof O=="object"&&typeof O.r=="bigint"&&typeof O.s=="bigint"){const{r:K,s:it}=O;U=new h(K,it)}else throw new Error("PARSE");W=a.fromHex(x)}catch(K){if(K.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(H&&U.hasHighS())return!1;Z&&(g=n.hash(g));const{r:Y,s:X}=U,at=E(g),D=o(X),gt=c(at*D),Q=c(Y*D),rt=(ot=a.BASE.multiplyAndAddUnsafe(W,gt,Q))==null?void 0:ot.toAffine();return rt?c(rt.x)===Y:!1}return{CURVE:n,getPublicKey:B,getSharedSecret:I,sign:z,verify:G,ProjectivePoint:a,Signature:h,utils:m}}class Yt extends Pt{constructor(n,t){super(),this.finished=!1,this.destroyed=!1,Ft(n);const r=Gt(t);if(this.iHash=n.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const s=this.blockLen,i=new Uint8Array(s);i.set(r.length>s?n.create().update(r).digest():r);for(let l=0;l<i.length;l++)i[l]^=54;this.iHash.update(i),this.oHash=n.create();for(let l=0;l<i.length;l++)i[l]^=106;this.oHash.update(i),i.fill(0)}update(n){return Ot(this),this.iHash.update(n),this}digestInto(n){Ot(this),Wt(n,this.outputLen),this.finished=!0,this.iHash.digestInto(n),this.oHash.update(n),this.oHash.digestInto(n),this.destroy()}digest(){const n=new Uint8Array(this.oHash.outputLen);return this.digestInto(n),n}_cloneInto(n){n||(n=Object.create(Object.getPrototypeOf(this),{}));const{oHash:t,iHash:r,finished:s,destroyed:i,blockLen:l,outputLen:c}=this;return n=n,n.finished=s,n.destroyed=i,n.blockLen=l,n.outputLen=c,n.oHash=t._cloneInto(n.oHash),n.iHash=r._cloneInto(n.iHash),n}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const Kt=(e,n,t)=>new Yt(e,n).update(t).digest();Kt.create=(e,n)=>new Yt(e,n);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function qe(e){return{hash:e,hmac:(n,...t)=>Kt(e,n,Xt(...t)),randomBytes:Dt}}function Oe(e,n){const t=r=>Ae({...e,...qe(r)});return Object.freeze({...t(n),create:t})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Mt=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),Lt=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),Ne=BigInt(1),mt=BigInt(2),Zt=(e,n)=>(e+n/mt)/n;function _e(e){const n=Mt,t=BigInt(3),r=BigInt(6),s=BigInt(11),i=BigInt(22),l=BigInt(23),c=BigInt(44),o=BigInt(88),a=e*e*e%n,y=a*a*e%n,w=V(y,t,n)*y%n,q=V(w,t,n)*y%n,T=V(q,mt,n)*a%n,b=V(T,s,n)*T%n,f=V(b,i,n)*b%n,d=V(f,c,n)*f%n,h=V(d,o,n)*d%n,m=V(h,c,n)*f%n,B=V(m,t,n)*y%n,S=V(B,l,n)*b%n,I=V(S,r,n)*a%n,p=V(I,mt,n);if(!Et.eql(Et.sqr(p),e))throw new Error("Cannot find square root");return p}const Et=ye(Mt,void 0,void 0,{sqrt:_e}),Te=Oe({a:BigInt(0),b:BigInt(7),Fp:Et,n:Lt,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:e=>{const n=Lt,t=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),r=-Ne*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),s=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),i=t,l=BigInt("0x100000000000000000000000000000000"),c=Zt(i*e,n),o=Zt(-r*e,n);let a=R(e-c*t-o*s,n),y=R(-c*r-o*i,n);const w=a>l,q=y>l;if(w&&(a=n-a),q&&(y=n-y),a>l||y>l)throw new Error("splitScalar: Endomorphism failed, k="+e);return{k1neg:w,k1:a,k2neg:q,k2:y}}}},Qt);BigInt(0);Te.ProjectivePoint;export{Te as secp256k1};
