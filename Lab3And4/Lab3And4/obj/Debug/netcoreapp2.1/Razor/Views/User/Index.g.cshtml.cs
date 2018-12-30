#pragma checksum "C:\Users\Dzira\source\repos\Lab3And4\Lab3And4\Views\User\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "ae9e380e48813fac7b120302f759a2fbe6dd208a"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_User_Index), @"mvc.1.0.view", @"/Views/User/Index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/User/Index.cshtml", typeof(AspNetCore.Views_User_Index))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "C:\Users\Dzira\source\repos\Lab3And4\Lab3And4\Views\_ViewImports.cshtml"
using Lab3And4;

#line default
#line hidden
#line 2 "C:\Users\Dzira\source\repos\Lab3And4\Lab3And4\Views\_ViewImports.cshtml"
using Lab3And4.Models;

#line default
#line hidden
#line 1 "C:\Users\Dzira\source\repos\Lab3And4\Lab3And4\Views\User\Index.cshtml"
using Microsoft.AspNetCore.Identity;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"ae9e380e48813fac7b120302f759a2fbe6dd208a", @"/Views/User/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"f77ad9ad2d0a91e4fe605efd854b647bee1382a9", @"/Views/_ViewImports.cshtml")]
    public class Views_User_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<List<AppUser>>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(39, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(105, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 6 "C:\Users\Dzira\source\repos\Lab3And4\Lab3And4\Views\User\Index.cshtml"
  
    ViewData["Title"] = "Управление пользователями";
    Layout = "_Layout";

#line default
#line hidden
            BeginContext(193, 63, true);
            WriteLiteral("\r\n<h2>Управление пользователями</h2>\r\n\r\n<div class=\"btn-block\">");
            EndContext();
            BeginContext(257, 51, false);
#line 13 "C:\Users\Dzira\source\repos\Lab3And4\Lab3And4\Views\User\Index.cshtml"
                  Write(Html.ActionLink("Зарегистрировать", "Edit", "User"));

#line default
#line hidden
            EndContext();
            BeginContext(308, 125, true);
            WriteLiteral("</div>\r\n<table class=\"table\">\r\n    <tr>\r\n        <th>Действия</th>\r\n        <th>Email</th>\r\n        <th>ФИО</th>\r\n    </tr>\r\n");
            EndContext();
#line 20 "C:\Users\Dzira\source\repos\Lab3And4\Lab3And4\Views\User\Index.cshtml"
         foreach (var user in Model)
        {
            var action = await UserManager.IsInRoleAsync(user, "Admin") ? "Admin" : "User";

#line default
#line hidden
            BeginContext(575, 38, true);
            WriteLiteral("            <tr>\r\n                <td>");
            EndContext();
            BeginContext(614, 70, false);
#line 24 "C:\Users\Dzira\source\repos\Lab3And4\Lab3And4\Views\User\Index.cshtml"
               Write(Html.ActionLink("Редактировать", "Edit", "User", new { id = user.Id }));

#line default
#line hidden
            EndContext();
            BeginContext(684, 2, true);
            WriteLiteral("  ");
            EndContext();
            BeginContext(687, 66, false);
#line 24 "C:\Users\Dzira\source\repos\Lab3And4\Lab3And4\Views\User\Index.cshtml"
                                                                                        Write(Html.ActionLink("Удалить", "Remove", "User", new { id = user.Id }));

#line default
#line hidden
            EndContext();
            BeginContext(753, 1, true);
            WriteLiteral(" ");
            EndContext();
            BeginContext(755, 68, false);
#line 24 "C:\Users\Dzira\source\repos\Lab3And4\Lab3And4\Views\User\Index.cshtml"
                                                                                                                                                            Write(Html.ActionLink(action, "ToggleAdmin", "User", new { id = user.Id }));

#line default
#line hidden
            EndContext();
            BeginContext(823, 28, true);
            WriteLiteral(" </td>\r\n                <td>");
            EndContext();
            BeginContext(852, 10, false);
#line 25 "C:\Users\Dzira\source\repos\Lab3And4\Lab3And4\Views\User\Index.cshtml"
               Write(user.Email);

#line default
#line hidden
            EndContext();
            BeginContext(862, 27, true);
            WriteLiteral("</td>\r\n                <td>");
            EndContext();
            BeginContext(890, 73, false);
#line 26 "C:\Users\Dzira\source\repos\Lab3And4\Lab3And4\Views\User\Index.cshtml"
               Write(string.Format("{0} {1} {2}", user.Surname, user.FirstName, user.LastName));

#line default
#line hidden
            EndContext();
            BeginContext(963, 26, true);
            WriteLiteral("</td>\r\n            </tr>\r\n");
            EndContext();
#line 28 "C:\Users\Dzira\source\repos\Lab3And4\Lab3And4\Views\User\Index.cshtml"
        } 

#line default
#line hidden
            BeginContext(1001, 12, true);
            WriteLiteral("</table>\r\n\r\n");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public UserManager<AppUser> UserManager { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<List<AppUser>> Html { get; private set; }
    }
}
#pragma warning restore 1591
