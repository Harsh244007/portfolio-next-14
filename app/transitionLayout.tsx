


const TransitionLayout = ({ children }: { children: React.ReactNode }) => {
//   const [transitionStage, setTransitionStage] = useState("fadeOut");
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   useEffect(() => {
//     setTransitionStage("fadeOut");
//     setTimeout(()=>    setTransitionStage("fadeIn"),1000
//     )
//   }, [pathname,searchParams]);
// //   useEffect(() => {
// //     if (children !== displayChildren) setTransitionStage("fadeOut");
// //   }, [children, displayChildren]);

  return (
      <>{children}</>
    );
};
export default TransitionLayout