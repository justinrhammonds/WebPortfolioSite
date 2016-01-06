using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebPortfolioSite.Startup))]
namespace WebPortfolioSite
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
