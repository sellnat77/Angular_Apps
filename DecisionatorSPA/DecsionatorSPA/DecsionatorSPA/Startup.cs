using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(DecsionatorSPA.Startup))]
namespace DecsionatorSPA
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
