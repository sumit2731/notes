export const JiraIssuePage = () => {
  return (
    <JiraPageLayout>
      <Issue />
    </JiraPageLayout>
  );
};

const JiraPageLayout = ({ children }) => {
  return (
    <div className="app">
      <Topbar />
      <div className="main-content">
        <Sidebar />
        <div className="page-content">{children}</div>
      </div>
    </div>
  );
};

export const Topbar = () => {
  return (
    <div className="top-bar">
      <Logo />
      <MainMenu />
      <Create />
      more top bar components here like SearchBar and ProfileMenu
    </div>
  );
};

export const Sidebar = () => {
  return (
    <DraggableSidebar>
      <Header />
      <PlanningSection />
      <DevelopmentSection />
      other Sections
    </DraggableSidebar>
  );
};


const PlanningSection = () => {
  return (
    <CollapsableSection title="Planning">
      <button className="board-picker">ELS board</button>

      <ul className="section-menu">... all the menu items here</ul>
    </CollapsableSection>
  );
};

const CollapsableSection = ({ children, title }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="sidebar-section">
      <div
        className="sidebar-section-title"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {title}
      </div>

      {!isCollapsed && <>{children}</>}
    </div>
  );
};

const DraggableSidebar = ({ children }: { children: ReactNode }) => {
  const [width, setWidth] = useState(240);
  const [startMoving, setStartMoving] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const changeWidth = (e: MouseEvent) => {
      if (!startMoving) return;
      if (!ref.current) return;

      const left = ref.current.getBoundingClientRect().left;
      const wi = e.clientX - left;

      setWidth(wi);
    };

    ref.current.addEventListener('mousemove', changeWidth);

    return () => ref.current?.removeEventListener('mousemove', changeWidth);
  }, [startMoving, ref]);

  const onStartMoving = () => {
    setStartMoving(true);
  };

  const onEndMoving = () => {
    setStartMoving(false);
  };


  return (
    <div
      className="sidebar"
      ref={ref}
      onMouseLeave={onEndMoving}
      style={{ width: `${width}px` }}
    >
      <Handle onMouseDown={onStartMoving} onMouseUp={onEndMoving} />
      <!-- children will not be affected by this component's re-renders -->
      {children}
    </div>
  );
};
