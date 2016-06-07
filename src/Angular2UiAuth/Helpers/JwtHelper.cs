using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace CoreSamples.Helpers
{
    public static class JwtHelper
    {
        public static string GetJwtToken(string email)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var securityKey = GetBytes("anyoldrandomtext");
            var now = DateTime.UtcNow;
            var claimsIdentity = new ClaimsIdentity();
            claimsIdentity.AddClaim(new Claim(ClaimTypes.UserData, "IsValid", ClaimValueTypes.String, "(local)"));
            claimsIdentity.AddClaim(new Claim(ClaimTypes.Email, "Email", ClaimValueTypes.String, email));
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = claimsIdentity,
                Issuer = "self",
                Audience = "https://www.mywebsite.com",
                Expires = now.AddMinutes(60),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(securityKey), SecurityAlgorithms.HmacSha256)
                  //"http://www.w3.org/2001/04/xmldsig-more#hmac-sha256",
                  //"http://www.w3.org/2001/04/xmlenc#sha256"),
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            return tokenString;
        }

        public static byte[] GetBytes(string input)
        {
            var bytes = new byte[input.Length * sizeof(char)];
            Buffer.BlockCopy(input.ToCharArray(), 0, bytes, 0, bytes.Length);
            return bytes;
        } 
    }
}
