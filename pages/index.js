import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

HomePage.getInitialProps = async ({ req, query }) => {

    console.log('query',query.page);
    console.log('----------------------------');
    console.log('req',req.headers['x-forwarded-proto']);
  const protocol = req
    ? `${req.headers['x-forwarded-proto']}:`
    : location.protocol

    //console.log( 'location',location.protocol);
  const host = req ? req.headers['x-forwarded-host'] : location.host
  const pageRequest = `${protocol}//${host}/api/profile/index.js` //?page=${query.page ||  1}&limit=${query.limit || 9}
  const res = await fetch(pageRequest)
  // console.log('res',res);
  const json = await res.json()
  // console.log('json',json);
  return json
}
// page, pageCount
function HomePage({ profiles }) {
  return (
    <>
    <p> Home</p>
      <ul>
        {/*profiles.map(p => (
          <li className="profile" key={p.id}>
            <Link href={`/profile?id=${p.id}`}>
              <a>
                <img src={p.avatar} />
                <span>{p.name}</span>
              </a>
            </Link>
          </li>
        )) */}
      </ul>
    </>
  )
}

export default HomePage
