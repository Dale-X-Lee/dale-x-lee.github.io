// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications-amp-preprints",
          title: "Publications &amp; Preprints",
          description: "My publications and preprints are listed below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications&preprints/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "The following are the courses which I taught or in which I served as a teaching assistant.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-compact-lie-groups-as-boundaries-of-manifolds-in-chinese",
      
        title: "Compact Lie Groups as Boundaries of Manifolds(In Chinese)",
      
      description: "A constructive proof that every Lie group is the boundary of certain smooth manifold.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Compact-Lie-Groups-as-Boundaries-of-Manifolds/";
        
      },
    },{id: "post-deduction-of-morse-inequality-perfect-morse-function-and-decomposition-into-derict-sum-in-chinese",
      
        title: "Deduction of Morse Inequality, Perfect Morse Function and Decomposition into Derict Sum(In Chinese)...",
      
      description: "Some notes when learning Morse theory for the second time.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Deduction-of-Morse-Inequality-Perfect-Morse-Function-and-Decomposition-into-Derict-Sum%E7%9B%B4%E5%92%8C%E5%88%86%E8%A7%A3/";
        
      },
    },{id: "post-simplex-decomposition-of-product-of-singular-simplexes-in-chinese",
      
        title: "Simplex Decomposition of Product of Singular Simplexes(In Chinese)",
      
      description: "Construct a concrete simplex decomposition of product of singular simplexes with an intuitive proof.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Simplex-Decomposition-of-Product-of-Singular-Simplexes/";
        
      },
    },{id: "post-three-ways-to-think-of-connections-on-vector-bundles-in-chinese",
      
        title: "Three Ways to Think of Connections on Vector Bundles(In Chinese)",
      
      description: "To record three usual ways to think of connections on vecter bundles.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Three-Ways-to-Think-of-Connections-on-Vector-Bundles/";
        
      },
    },{id: "post-bounded-operators-can-not-satisfy-canonical-commutative-relation-in-chinese",
      
        title: "Bounded Operators Can Not Satisfy Canonical Commutative Relation(In Chinese)",
      
      description: "The proof of the fact that two bounded operators can not satisfy the C.C.R.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Bounded-Operators-Can-Not-Satisfy-Canonical-Commutative-Relation/";
        
      },
    },{id: "post-initiation-to-convergence-theory-in-chinese",
      
        title: "Initiation to Convergence Theory(In Chinese)",
      
      description: "A very brief introduction to notions in convergence theory.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Initiation-to-Convergence-Theory/";
        
      },
    },{id: "post-quot-odd-dimensional-quot-approach-to-hamiltonian-phase-flow",
      
        title: "&quot;Odd-dimensional&quot; Approach to Hamiltonian Phase Flow",
      
      description: "This is a short note on the chapter 9 in the book Mathematical Methods of Classical Mechanics by Arnold.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Odd-dimensional-Approach-to-Hamiltonian-Phase-Flow/";
        
      },
    },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
