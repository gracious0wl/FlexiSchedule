export default function Footer() {
  return (
    <footer className="bg-primary text-white text-center p-6 mt-12">
      <p>&copy; {new Date().getFullYear()} FlexiSchedule. All rights reserved.</p>
      <p className="mt-2 text-sm">Follow us on social media for updates.</p>
    </footer>
  );
}
