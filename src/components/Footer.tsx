export default function Footer() {
  return (
    <footer
      className="py-4 mt-5 text-white"
      style={{
         background: '#0c5360ff',
          height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1020,
      }}
    >
      <div className="container text-center small">
        &copy; {new Date().getFullYear()} <strong>Sandesh Pharma</strong>. All rights reserved.
      </div>
    </footer>
  )
}
