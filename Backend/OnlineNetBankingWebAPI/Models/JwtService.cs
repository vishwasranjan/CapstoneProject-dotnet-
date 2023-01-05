using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace OnlineNetBankingWebAPI.Models
{
    public class JwtService
    {
        public String SecretKey { get; set; }
        public int TokenDuration { get; set; }
        private readonly IConfiguration _configuration;
        public JwtService(IConfiguration configuration)
        {
            _configuration = configuration;
            this.SecretKey = _configuration.GetSection("jwtConfig").GetSection("Key").Value;
            this.TokenDuration = Int32.Parse(_configuration.GetSection("jwtConfig").GetSection("Duration").Value);
        }
        public string GenerateToken(string customerId, string firstName, string lastName, string email, string userName)
        {
            //create key to include in signature
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this.SecretKey));
            var signature = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            //payload
            var payload = new[]
            {
                new Claim("customerId", customerId),
                new Claim("firstName", firstName),
                new Claim("lastName", lastName),
                new Claim("email", email),
                new Claim("userName", userName)
            };
            //create token
            var jwtToken = new JwtSecurityToken(
                issuer: "localhost",
                audience: "localhost",
                claims: payload,
                expires: DateTime.Now.AddMinutes(TokenDuration),
                signingCredentials:signature
                );
            //convert token into string using jwtTokenHandler and return it
            return new JwtSecurityTokenHandler().WriteToken(jwtToken);
        }
    }
}
