import { loadManifest} from '@angular-architects/module-federation';

// Promise.all([
//     loadRemoteEntry({
//         type: 'module',
//         remoteEntry: 'http://localhost:4300/remoteEntry.js',
//     }),
//   loadRemoteEntry({
//         type: 'module',
//         remoteEntry: 'http://localhost:4400/remoteEntry.js',
//     })
// ])
//     .catch((err) => console.error('Error loading remote entries', err))
//     .then(() => import('./bootstrap'))
//     .catch((err) => console.error(err));
loadManifest('assets/Config/mw_host_manifest.json')
	.catch((err) => console.error('Error loading remote entries', err))
	.then(() => import('./bootstrap'))
	.catch((err) => console.error(err));